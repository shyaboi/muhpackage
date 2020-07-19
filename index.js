
  class Pop {
    hello() {
        console.log('hello npm friends');
    }

    pop(pop) {
        console.log(pop);
    }
    shyaboi() {
      console.log('Shyaboi!');
  }
}
module.exports = Pop

class Ok extends Pop {
  
  
  otherThing() {
    console.log('i am another thing');
  }
}
module.exports = Ok


class Server extends Pop {
  // sitePort(port)
  // {
  //   port = portNumber
  // }
  
  sitePop(pN, route, content, index){
    
    
    const express = require('express')
    var path = require('path');
    var router = express.Router();
    const app = express()
    var pNum = pN
    var portNumber = process.env || pNum
    const port = portNumber
    
    app.get("/", (req, res) => res.send(content))

    app.get(route, function (req, res, next) {
  res.sendFile(path.join(__dirname, index));
});
    
    app.listen(port, () => console.log(`App listening at http://localhost:${port}`))


  }}

module.exports = Server


// var pak = new Pop()
// var ok = new Ok()


// pak.pop('fdsgdg')
// ok.otherThing()
// pak.shyaboi()