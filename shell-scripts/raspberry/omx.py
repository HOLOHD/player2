#!/usr/bin/python
import sys
import subprocess
import os

lines = open('/boot/config.txt')
custom_file_portrait = False
custom_file_landscape = False
for line in lines:
	if 'display_rotate' in line:
		rotate_value = line.strip("display_rotate=")
		r = int(rotate_value)
#	if 'framebuffer_width' in line:
#		width = line.strip("framebuffer_width=")
#		w = int(width)
#	if 'framebuffer_height' in line:
#		height = line.strip("framebuffer_height=")
#		h = int(height)

if os.path.exists('/home/pi/media/brand_intro.mp4'):
	custom_file_landscape = True

if os.path.exists('/home/pi/media/brand_intro_portrait.mp4'):
	custom_file_portrait = True

#if w < h : 
if r == 1 or r==3 :
	if custom_file_portrait :
		path ='/home/pi/media/brand_intro_portrait.mp4'
	elif custom_file_landscape :
		path ='/home/pi/media/brand_intro.mp4'
	else:
		path = '/home/pi/boot_video.mov'
else:
	if custom_file_landscape :
		path ='/home/pi/media/brand_intro.mp4'
	else:
		path ='/home/pi/boot_video.mov'


a = subprocess.call(["omxplayer","--loop","--no-osd","-o", "hdmi", path])
