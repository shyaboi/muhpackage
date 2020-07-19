#!/usr/bin/env node

var path = require("path");
const fs = require("fs");

fs.mkdir("./muhpackage", { recursive: true }, (err) => {
  if (err) throw err;
  console.log("root file made")
});


fs.writeFile(
    "./muhpackage/package.json",
    `
    {
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
      console.log("package JSON made")
    }
  );




  const { exec } = require("child_process");
exec("cd muhpackage && npm i express", (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("data",data);
		return;
	}
	console.log("data",data);

  console.log("express installed")
});



exec("cd muhpackage && npm i muhpackage", (error, data, getter) => {
	if(error){
		console.log("error",error.message);
		return;
	}
	if(getter){
		console.log("data",data);
		return;
	}
	console.log("data",data);

  console.log("muhpackage installed itself")
});



fs.writeFile(
  "./muhpackage/server.js",
  `var Muhpackage = require("muhpackage");
  var server = new Muhpackage()
  
  server.sitePop()`,
  (err) => {
    if (err) throw err;
  }
  );
  console.log("Server Created")



fs.mkdir("./muhpackage/views", { recursive: true }, (err) => {
  if (err) throw err;
});
console.log("views folder created")



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
  console.log("index.html created")


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
console.log("index2.html created")


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
console.log("dexy.html created")

fs.mkdir("./muhpackage/views/imgs", { recursive: true }, (err) => {
  if (err) throw err;
});
console.log("images folder created")


console.log("Have fun with muhpackage!")