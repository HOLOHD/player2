# React Touch UI

## Installation

    $ cd public/touch-ui
    $ npm install
    $ npm start
    $ Open http://localhost:1234 to view local changes with hot-reloading enabled

## Build steps

    $ cd public/touch-ui
    $ npm run build

This will create a **build/** folder in the _react-touch-ui/_ directory where you'll find minified files of index.html, JS and CSS ready for production along with any imported assets.

## File Dependencies for Server-Side Rendering

- react-touchui-server.js _server_ file in _piSignagePro/_ directory
- tvui.js _controller_ file in _app/controllers/_ directory

## Server-Side rendering steps

    $ cd piSignagePro
    $ node react-touchui-server.js

---

## Bundled using [**Parcel**](https://parceljs.org/)
