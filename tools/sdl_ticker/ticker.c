#include <pango/pangocairo.h>
#include <SDL.h>
#include <time.h>
#include <unistd.h>
#include <fcntl.h>

#define FONT "Sans Serif"
//#define TEXT "Wait a specified number of milliseconds before returning. SDL_Delay will wait at least the specified time, but possible longer and is so is so かわいい!"

#define TICKER_HEIGHT 60

SDL_DisplayMode DM;
SDL_Window *sdlWindow;
SDL_Surface *sdlSurface;

cairo_t *layout_context;
cairo_t *render_context;
cairo_surface_t *surface;

PangoRectangle char_props;
PangoFontDescription *desc;
PangoLayout *layout;

int index_;
int trailing;
int char_offset;
int ticker_pos;
int utf8_index_;
int utf8_length;
int *indicesArray;

int tickerWidth;

clock_t start_time;

void
clock_it (_Bool end, const char *str) {
    if (end) {
        printf("time taken by %s in msecs %f\n",str,((double) (clock() - start_time)) * 1000/ CLOCKS_PER_SEC);
    } else {
        start_time = clock();
    }
}

int utf8_strlen(const unsigned char *str)
{
    int c,i,ix,q;
    for (q=0, i=0, ix=strlen(str); i < ix; i++, q++)
    {
        c = (unsigned char) str[i];
        if      (c>=0   && c<=127) i+=0;
        else if ((c & 0xE0) == 0xC0) i+=1;
        else if ((c & 0xF0) == 0xE0) i+=2;
        else if ((c & 0xF8) == 0xF0) i+=3;
        //else if (($c & 0xFC) == 0xF8) i+=4; // 111110bb //byte 5, unnecessary in 4 byte UTF-8
        //else if (($c & 0xFE) == 0xFC) i+=5; // 1111110b //byte 6, unnecessary in 4 byte UTF-8
        else return 0;//invalid utf8
    }
    return q;
}

int utf8_charlen(const unsigned char c)
{
    if      (c>=0   && c<=127) return 1;
    else if ((c & 0xE0) == 0xC0) return 2;
    else if ((c & 0xF0) == 0xE0) return 3;
    else if ((c & 0xF8) == 0xF0) return 4;
    //else if (($c & 0xFC) == 0xF8) i+=4; // 111110bb //byte 5, unnecessary in 4 byte UTF-8
    //else if (($c & 0xFE) == 0xFC) i+=5; // 1111110b //byte 6, unnecessary in 4 byte UTF-8
    else return 1;//invalid utf8
}

/* function to generate and return random numbers */
void storeIndices(const unsigned char *str , int * r) {
    int c,i,ix,q;
    for (q=0, i=0, ix=strlen(str); i < ix; i++, q++)
    {
        c = (unsigned char) str[i];
        r[q] = i;
        if (c>=0   && c<=127) {
            i+=0;
        } else if ((c & 0xE0) == 0xC0) {
            i+=1;
        } else if ((c & 0xF0) == 0xE0) {
            i+=2;
        } else if ((c & 0xF8) == 0xF0) {
            i+=3;
        //else if (($c & 0xFC) == 0xF8) i+=4; // 111110bb //byte 5, unnecessary in 4 byte UTF-8
        //else if (($c & 0xFE) == 0xFC) i+=5; // 1111110b //byte 6, unnecessary in 4 byte UTF-8
        } else {
            break;//invalid utf8
        }
    }
}

void
init_sdl (int paddingRight, int tickerHeight, int displayWidth, int displayHeight, int displayOffset,const char *title)
{
    if (SDL_Init(SDL_INIT_VIDEO|SDL_INIT_TIMER|SDL_INIT_EVENTS) != 0) {
            SDL_Log("Unable to initialize SDL: %s", SDL_GetError());
            return;
        }

    //SDL_GetDesktopDisplayMode(0, &DM);
    //printf("SDL Ticker, desktop dimensions %d %d\n",DM.w,DM.h);
    tickerWidth = displayWidth - paddingRight;
    sdlWindow = SDL_CreateWindow(title,
                              displayOffset,
                              (displayHeight - tickerHeight),
                              tickerWidth, tickerHeight,
                              SDL_WINDOW_SHOWN | SDL_WINDOW_ALWAYS_ON_TOP | SDL_WINDOW_BORDERLESS);
    if( sdlWindow == NULL )
    {
        printf( "SDL Ticker, Window could not be created! SDL_Error: %s\n", SDL_GetError() );
        return;
    }

    sdlSurface = SDL_GetWindowSurface( sdlWindow );

    //Fill the surface white
    //SDL_FillRect( sdlSurface, NULL, SDL_MapRGB( sdlSurface->format, 0xFF, 0xFF, 0xFF ) );

}

cairo_t*
create_layout_context ()
{
    cairo_surface_t *temp_surface;
    cairo_t *context;

    temp_surface = cairo_image_surface_create (CAIRO_FORMAT_ARGB32, 0, 0);
    context = cairo_create (temp_surface);
    cairo_surface_destroy (temp_surface);

    return context;
}

void
get_text_size (PangoLayout *layout,
                unsigned int *width,
                unsigned int *height)
{
    pango_layout_get_size (layout, width, height);
    *width /= PANGO_SCALE;
    *height /= PANGO_SCALE;
    //printf("pango scale %d %d %d\n",PANGO_SCALE,*width,*height);
}

PangoLayout *create_pango_layout (const char *text, int font_size, int tickerDir)
{
    char font_string[50];

    sprintf(font_string, "%s %d", FONT,font_size); // puts string into buffer

    layout_context = create_layout_context ();
    layout = pango_cairo_create_layout (layout_context);

    pango_layout_set_width (layout,-1);      //single line, no width set
    pango_layout_set_alignment (layout,PANGO_ALIGN_LEFT);

    /* Load the font */
    desc = pango_font_description_from_string (font_string);
    pango_font_description_set_stretch(desc, PANGO_STRETCH_NORMAL);
    pango_font_description_set_weight (desc,PANGO_WEIGHT_ULTRALIGHT);
    pango_layout_set_font_description (layout, desc);
    pango_font_description_free (desc);
    if (tickerDir == 0) {
        utf8_index_ = 0;
        index_ = indicesArray[utf8_index_] ;
        ticker_pos = 0;
        char_offset = tickerWidth * PANGO_SCALE;
        pango_layout_set_text (layout, text+index_, -1);
        pango_layout_index_to_pos (layout,0,&char_props);    //get current character width
    } else {
        utf8_index_ = utf8_length -1;
        index_ = indicesArray[utf8_index_] ;
        ticker_pos = 0;
        if (utf8_index_ > 0) {
            pango_layout_set_text (layout, text+indicesArray[utf8_index_ - 1], -1);
            pango_layout_index_to_pos (layout,0,&char_props);    //get previous character width
        } else {
            char_props.width = 0;
        }
        char_offset = char_props.width;
        pango_layout_set_text (layout, text+index_, -1);
    }

    //printf("char_offset=%d index=%d %d width=%d\n",char_offset/PANGO_SCALE, index_,char_props.x/PANGO_SCALE,char_props.width/PANGO_SCALE);
    //get_text_size (layout, text_width, text_height);

    surface = cairo_image_surface_create_for_data (
        sdlSurface->pixels,
        CAIRO_FORMAT_RGB24,
        sdlSurface->w,
        sdlSurface->h,
        sdlSurface->pitch);

    render_context = cairo_create (surface);

    /* Render */
    //cairo_set_source_rgba (render_context, 1, 1, 1, 1);
    //pango_cairo_show_layout (render_context, layout);

}

void
render_text (const char *text,int x_pos, int tickerDir)
{
    int x_pos_pango;
    int str_length = strlen(text); //utf8_strlen(text);
    int char_length;
    //printf("str length %d %d\n",str_length,strlen(text));
    x_pos_pango = x_pos * PANGO_SCALE;

    if (tickerDir == 0) {
        if ((x_pos_pango - char_offset)  >= 0) {
            //change the index and text
            char_offset += char_props.width;
            index_ = (index_ + utf8_charlen(text[index_])) % str_length;
            pango_layout_set_text (layout, text+index_, -1);
            pango_layout_index_to_pos (layout,0,&char_props);

            if (index_ == 0) {
                index_ = 0;
                utf8_index_ = 0;
                x_pos_pango = 0;
                ticker_pos = 0;
                char_offset = tickerWidth * PANGO_SCALE;
            }
        }
        //printf("x_pos=%d char_offset=%d index=%d %d width=%d indent=%d\n",x_pos_pango/PANGO_SCALE,char_offset/PANGO_SCALE, index_,char_props.x/PANGO_SCALE,char_props.width/PANGO_SCALE,
        //                                                char_offset/PANGO_SCALE - x_pos_pango/PANGO_SCALE);
        pango_layout_set_indent (layout,char_offset - x_pos_pango);
    }
    if (tickerDir == 1) {
        if (utf8_index_ > 0 && (x_pos_pango - char_offset)  >= 0) {
            //change the index and text
            utf8_index_ = utf8_index_ - 1;
            index_ = indicesArray[utf8_index_] ;
            if (utf8_index_ > 0) {
                pango_layout_set_text (layout, text+indicesArray[utf8_index_ - 1], -1);
                pango_layout_index_to_pos (layout,0,&char_props);    //get x position
                char_offset += char_props.width;
            } else {
                char_props.width = 0;
            }
            pango_layout_set_text (layout, text+index_, -1);
        }
        if ((x_pos_pango + char_props.width - char_offset) > tickerWidth * PANGO_SCALE) {
            utf8_index_ = utf8_length -1;
            index_ = indicesArray[utf8_index_] ;
            ticker_pos = 0;
            x_pos_pango = 0;
            if (utf8_index_ > 0) {
                pango_layout_set_text (layout, text+indicesArray[utf8_index_ - 1], -1);
                pango_layout_index_to_pos (layout,0,&char_props);    //get x position
            } else {
                char_props.width = 0;
            }
            char_offset = char_props.width;
            pango_layout_set_text (layout, text+index_, -1);
        }

        //printf("x_pos=%d char_offset=%d index=%d %d width=%d indent=%d\n",x_pos_pango/PANGO_SCALE,char_offset/PANGO_SCALE, index_,char_props.x/PANGO_SCALE,char_props.width/PANGO_SCALE,
        //                                                        (x_pos_pango + char_props.width)/PANGO_SCALE - char_offset/PANGO_SCALE);
        pango_layout_set_indent (layout,x_pos_pango + char_props.width - char_offset);
    }

    /* Render */
    cairo_set_source_rgba (render_context, 0.5, 0.5, 0.5, 0.5);
    cairo_set_operator (render_context, CAIRO_OPERATOR_SOURCE);
    cairo_paint (render_context);
    cairo_set_source_rgba (render_context, 1, 1, 1, 1);

    pango_cairo_show_layout (render_context, layout);

}

int main( int argc, char* argv[] )
{
    SDL_Event event;
    int keep_running = 1;

    int tickerSpeed,tickerDir,tickerFontSize,paddingRight,step,tick,tickerHeight,displayWidth,displayHeight,displayOffset;
    char* tickerText;
    char* tickerTitle;

    ssize_t len;
    char args_str[16];
    int flags = fcntl(STDIN_FILENO, F_GETFL, 0);

    int result = fcntl(STDIN_FILENO, F_SETFL, flags | O_NONBLOCK);
    if (result == -1) {
        fprintf(stderr, "Failed to set stdin to non-blocking\n");
    }

    if (argc != 11) {
        fprintf(stderr, "*** SDL Ticker, invalid count for arguments\n");
        return 1;
    } else {
        tickerSpeed = atoi(argv[1]);
        tickerDir = atoi(argv[2]);
        tickerFontSize = atoi(argv[3]);
        if (tickerFontSize < 10 || tickerFontSize > 80)
            tickerFontSize = 30;
        else
            tickerFontSize += 2;
        tickerText = argv[4];
        paddingRight = atoi(argv[5]);
        tickerHeight = atoi(argv[6]);
        displayWidth = atoi(argv[7]);
        displayHeight = atoi(argv[8]);
        displayOffset = atoi(argv[9]);
        tickerTitle = argv[10];
    }
    utf8_length = utf8_strlen(tickerText);
    if (utf8_length < 1) {
        fprintf(stderr, "*** SDL Ticker, ticker length is zero\n");
        return 1;
    }

    switch(tickerSpeed) {
        case 1:
            step = 2;
            tick = 8;
            break;
        case 2:
            step = 2;
            tick = 4;
            break;
        default:
            step = 4;
            tick = 4;
            break;
    }

    indicesArray = (int *) calloc( utf8_length,sizeof(int) );
    storeIndices(tickerText,indicesArray);
    init_sdl (paddingRight, tickerHeight, displayWidth, displayHeight, displayOffset,tickerTitle);

    create_pango_layout(tickerText, tickerFontSize, tickerDir);

    while (keep_running) {
        //clock_it(0,"SDL window update");
        render_text(tickerText,ticker_pos, tickerDir);

        ticker_pos = (ticker_pos + step);

        while (SDL_PollEvent(&event)){
            if (event.type == SDL_QUIT){
                keep_running = 0;
            }
            if (event.type == SDL_KEYDOWN){
                if (event.key.keysym.sym == SDLK_ESCAPE)
                    keep_running = 0;
                if (event.key.keysym.sym == SDLK_q)
                    keep_running = 0;
            }
        }

        len = read(STDIN_FILENO, args_str, sizeof(args_str) - 1);
        if (len > 0 && (args_str[0] == 'q')) {
            keep_running = 0;
        }


        //Update the surface
        SDL_UpdateWindowSurface( sdlWindow );
        //clock_it(1,"SDL window update");

        SDL_Delay (tick);
    }

    /* Clean up */
    SDL_DestroyWindow(sdlWindow);

    SDL_Quit();

    /* Cairo Clean up */
    cairo_destroy (layout_context);
    cairo_destroy (render_context);
    cairo_surface_destroy (surface);

    return 0;
}
