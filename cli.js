#!/usr/bin/env node
var path = require('path');
const fs = require('fs');


fs.mkdir('./views', { recursive: true }, (err) => {
    if (err) throw err;
  });

fs.mkdir('./views/imgs', { recursive: true }, (err) => {
    if (err) throw err;
  });


  fs.writeFile('./views/index.html', "diddly", (err) => {
    if (err) throw err;
  });

  fs.writeFile('./views/index2.html', { recursive: true }, (err) => {
    if (err) throw err;
  });
  
  fs.writeFile('./views/dexy.html', { recursive: true }, (err) => {
    if (err) throw err;
  });