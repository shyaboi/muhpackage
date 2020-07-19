
  class Pop {
    hello() {
        console.log('hello npm friends');
    }

    nThing(){
      console.log('benus')
    }

    pop(pop) {
        console.log(pop);
    }
    shyaboi() {
      console.log('Shysadasaboi!');
  }
}
module.exports = Pop



class Server extends Pop {

  sitePop(pN=process.env.PORT||3333,
   route1="/",
    route2="/index",
     route3="/dexy",
      index="../../views/index.html",
      dex="../../views/index2.html",
       dexy="../../views/dexy.html"
        ){
    
    const express = require('express')
    var path = require('path');
    const app = express()
    // var pNum = pN
    // var portNumber = process.env || pNum
    const port = pN

    app.use(express.static(path.join(__dirname, 'views')));

    

    app.get(route1, function (req, res, next) {
  res.sendFile(path.join(__dirname, index));
});

app.get(route2, function (req, res, next) {
  res.sendFile(path.join(__dirname, dex));
});

app.get(route3, function (req, res, next) {
  res.sendFile(path.join(__dirname, dexy));
});

    
    app.listen(port, () => console.log(`App listening at http://localhost:${port}`))


  }}

module.exports = Server


// var pak = new Pop()
// var ok = new Ok()


// pak.pop('fdsgdg')
// ok.otherThing()
// pak.shyaboi()