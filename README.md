# DreamZPrototype
- CS29 Dreamz Catcherz
- 2/6/2020


# Introduction
This is a small game protoype using the html 5 canvas object to 
render a solid game. The project will have no prerequisite software.
The objective is to show off the versatility of javascript programming
within chromium.

## Tutorials
https://www.w3schools.com/html/html5_canvas.asp
https://www.w3schools.com/html/html5_webstorage.asp
https://www.w3schools.com/html/html5_webworkers.asp

These might be helpful tools in interacting with the browser to create 
a solid game.

# Installation (How To Play)
Direct your browser to the index file in the root of the directory.


`file:///path-to-directory/DreamZPrototype/index.html`


This needs to work in Chromium but it should work in 
any browser that supports [html5](http://html5test.com/).

# Project Heirarchy
- `src/` is the source directory for all javascript code.
- `bin/` is a directory that will be ignored. Making this 
great for compiled libraries, packages, and uglified scripts.
- `assets/` is a directory for all the art and music assets in
the game.

## Modules And Organization
The project is organized amongst javascript files in the `src/`
directory. It is recommended Sprite/Objects are propagated into
their own files. Feel free to follow an ideal of "packages" by 
creating additional subdirectories within the `src/` directory
of the repository.

# Requirements
This project must:
[ ] Respond to wasd controls
[ ] Draw a main controllable sprite
[ ] Draw a sprite as an image rather than just a shape.
[ ] Show the number of frames per second
[ ] Store a variable into webstorage
[ ] Work within Chromium

# Game Design

## Pitch
Singular entity survives a hoard of small square enemies. 
Move WASD. Abilities Arrow Keys. The character must survive
as long as possible. There is a score for the number of enemies
killed. There will also be a number of seconds/millisecond timer.

# Credits and Special Thanks
This project was brought to you in part by CS29 Dreamz Catcherz.

