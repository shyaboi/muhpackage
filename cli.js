#!/usr/bin/env node

var path = require("path");
const fs = require("fs");

fs.mkdir("./views", { recursive: true }, (err) => {
  if (err) throw err;
});

fs.mkdir("./views/imgs", { recursive: true }, (err) => {
  if (err) throw err;
});

fs.writeFile(
  "./views/index.html",
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <a href="/index">index</a>
      <img src="logo.png" alt="ooof">
      <a href="/dexy">dexy</a>
  
  
  </body>
  </html>`,
  (err) => {
    if (err) throw err;
  }
);

fs.writeFile(
  "./views/index2.html",
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      anoterh 1
      <a href="/">home</a>
      <a href="/dexy">dexy</a>
  
  </body>
  </html>`,
  (err) => {
    if (err) throw err;
  }
);

fs.writeFile(
  "./views/dexy.html",
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <a href="/index">index</a>
      <a href="/">home</a>
  
  </body>
  </html>`,
  (err) => {
    if (err) throw err;
  }
);
