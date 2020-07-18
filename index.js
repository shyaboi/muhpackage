
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
  sitePop(){


    const express = require('express')
    const app = express()
    const port = 3000
    
    app.get('/', (req, res) => res.send('Hello World!'))
    
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


  }}

module.exports = Server


// var pak = new Pop()
// var ok = new Ok()


// pak.pop('fdsgdg')
// ok.otherThing()
// pak.shyaboi()