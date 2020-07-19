#!/usr/bin/env node

const { exec } = require('child_process');
var path = require("path");
const fs = require("fs");

fs.mkdir("./muhpackage", { recursive: true }, (err) => {
  if (err) throw err;
});


fs.writeFile(
    "./muhpackage/package.json",
    `
    {
        "name": "My New Website!",
        "version": "1.0.0",
        "description": "My new site made with simpleserver",
        "main": "server.js",
        "scripts": {
          "start": "node server.js"
        },
        "keywords": [
          "many"
        ],
        "author": "Shyaboi",
        "license": "ISC",
        "dependencies": {
        }
      }`,
    (err) => {
      if (err) throw err;
    }
  );
  const { execSync } = require('child_process');
  
  // stderr is sent to stdout of parent process
  // you can set options.stdio if you want it to go elsewhere
  const stdout = execSync('cd muhpackage && npm init -y');
  const { spawnSync} = require('child_process');
  const child = spawnSync('cd muhpackage && npm init -y', );
  console.error('error', child.error);
  console.log('stdout ', child.stdout);
  console.error('stderr ', child.stderr);
  
const stdout2 = execSync2('npm i express');
const { spawnSync} = require('child_process');
const child2 = spawnSync('npm i express', );
console.error('error', child2.error);
console.log('stdout ', child2.stdout);
console.error('stderr ', child2.stderr);


fs.writeFile(
    "./muhpackage/server.js",
    `var Muhpackage = require("muhpackage");
    var server = new Muhpackage()
    
    server.sitePop()`,
    (err) => {
      if (err) throw err;
    }
  );

fs.mkdir("./muhpackage/views", { recursive: true }, (err) => {
  if (err) throw err;
});

fs.writeFile(
  "./muhpackage/views/index.html",
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
  "./muhpackage/views/index2.html",
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
  "./muhpackage/views/dexy.html",
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

fs.mkdir("./muhpackage/views/imgs", { recursive: true }, (err) => {
  if (err) throw err;
});


console.log("Have fun with muhpackage!")