// module.exports = 
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

class Ok extends Pop {
 

    otherThing() {
        console.log('i am another thing');
    }
}

var pak = new Pop()
var ok = new Ok()


pak.pop('fdsgdg')
ok.otherThing()
pak.shyaboi()