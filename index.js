
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
  sitePop(portNumber, content, index){


    const express = require('express')
    var router = express.Router();
    const app = express()
    const port = portNumber
    
    app.get('/', (req, res) => res.send(content))

    router.get("*", function (req, res, next) {
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