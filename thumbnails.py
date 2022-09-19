from pyffmpeg import FFmpeg
import os
#from time import sleep
folder = "C:\\Users\\Asus\\media\\"
for file_name in os.listdir(folder):
    inf = folder + file_name
    outf = f'C:\\xampp\\htdocs\\player2\\thumb\\{file_name}.png'
    ff = FFmpeg()
    ff.convert(inf, outf)
    # sleep(1)
