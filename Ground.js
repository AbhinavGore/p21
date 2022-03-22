class Ground {      //declare  a class
    constructor (x, y, w, h){   //used to assign properties to all the objects
        let options = {
            isStatic:true
          };
          
          this.body = Bodies.rectangle(x, y, w, h, options);
          this.w = w;
          this.h = h;
          World.add(world, this.body);
    }
    //functions
    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill('yellow');
        rect(pos.x, pos.y, this.w, this.h);
        pop();
      }
      
}