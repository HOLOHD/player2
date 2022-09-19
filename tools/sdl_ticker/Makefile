CC = gcc
CFLAGS = `pkg-config --cflags pangocairo sdl2`
LIBS = `pkg-config --libs pangocairo sdl2`

build:
	$(CC) ticker.c $(CFLAGS) $(LIBS) -o ticker

run:
	./ticker

clean:
	rm ticker

