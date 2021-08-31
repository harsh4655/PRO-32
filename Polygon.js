class Polygon {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic': false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
       this.image = loadImage ("unnamed.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
     // rotate(angle);
      imageMode(CENTER);
     
      image(this.image ,pos.x,pos.y, this.width, this.height);
      pop();
    }
  };
  


