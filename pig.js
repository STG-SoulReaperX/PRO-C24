class Pig {
    constructor(x,y,height,angle) {
      var options = {
          'restitution': 0.8,
          'friction': 0.8,
          'density': 1.0
      }
      this.body = Bodies.rectangle(x,y,20,height,options);
      this.width = 12;
      this.height = height;

      Matter.Body.setAngle(this.body,angle);

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle);
      translate(pos.x,pos.y);

      rectMode(CENTER);
      fill(255);
      strokeWeight(3);
      stroke("green");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };