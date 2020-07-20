#!/usr/bin/env node
const { exec } = require("child_process");

const fs = require("fs");

exec("echo installing things and stuff", (error, data, getter) => {
  if(error){
    console.log("error",error.message);
		return;
	}
 console.log(data)
});


fs.mkdir("./muhpackage", { recursive: true }, (err) => {
  if (err) throw err;
  console.log("root file made")
});

fs.writeFile(
  "./muhpackage/.gitignore",
  `.gitignore
  noce_modules
  `,
  (err) => {
    if (err) throw err;
    console.log("git ignore created")
  }
);
if (process.platform === "win32") {

  fs.writeFile(
    "./muhpackage/package.json",
    `
    {
        "description": "My new site made with simpleserver",
        "main": "server.js",
        "scripts": {
          "start": "nodemon server.js",
          "pop": "start http://localhost:3333 && npm start"
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
      console.log("package JSON made (windows build)")
    }
  );
    
} else {
 fs.writeFile(
    "./muhpackage/package.json",
    `
    {
        "description": "My new site made with simpleserver",
        "main": "server.js",
        "scripts": {
          "start": "nodemon server.js",
          "pop": "open http://localhost:3333 && npm start"
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
      console.log("package JSON made (unix/gnu build)")
    }
  );
}





// exec("cd muhpackage && npm i express", (error, data) => {
// 	if(error){
// 		console.log("error",error.message);
// 		return;
// 	}

// 		console.log("data",data);

//   console.log("express installed")
// });



exec("cd muhpackage && npm i muhpackage express nodemon", (error, data, getter) => {
  if(error){
    console.log("error",error.message);
		return;
  }
  console.log(data)
  console.log("muhpackage installed itself, nodemon and exxoresss")
  console.log("starting yoour site ( ͡° ͜ʖ ͡°)")
  console.log("Have fun with muhpackage!")
  console.log("If you want to close the server press ctrl+c")
});

// exec("cd muhpackage && npm i nodemon", (error, data, getter) => {
//   if(error){
//     console.log("error",error.message);
// 		return;
// 	}
//   console.log("muhpackage installed itself")
//   console.log("Have fun with muhpackage!")
// });


fs.writeFile(
  "./muhpackage/server.js",
  `var Muhpackage = require("muhpackage");
  var server = new Muhpackage()
  
  server.pop()`,
  (err) => {
    if (err) throw err;
  }
  );
  console.log("Server Created")


  
  
  fs.mkdir("./muhpackage/views", { recursive: true }, (err) => {
    if (err) throw err;
  });
  console.log("views folder created")
     
  
  
  
  exec("cd muhpackage && cd views", (error, data, getter) => {
            if(error){
              console.log("error",error.message);
              return;
            }
            console.log(data)
            console.log("view move")
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
  <img src="https://i.ibb.co/N9X8N0N/logo.png" alt="ooof">
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

exec("cd muhpackage/views/imgs && curl -o logo.png https://i.ibb.co/N9X8N0N/logo.png", (error, data) => {
	if(error){
		console.log("error",error.message);
		return;
	}

		console.log(data);

  console.log("cuuuuuuuuuuuuuuurl")
});


const donus = function () {
exec("cd muhpackage && npm run pop", (error, data) => {
	if(error){
		console.log("error",error.message);
		return;
	}
  console.log("pop script starting")

		console.log(data);

    

});}
const doonus = function () {
  exec("cd muhpackage && code .", (error, data) => {
    if(error){
      console.log("error",error.message);
      return;
    }
  
      console.log(data);
  console.log("opening default code editor")
      
  
  });}

setTimeout(() => {
donus()  
doonus()
}, 7000);
