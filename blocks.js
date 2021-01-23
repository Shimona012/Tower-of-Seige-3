class Block{
  // maam now its working and every thing is perfect..thank you so much ma
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.2,
          isStatic : false,
        }
        this.Visiblity=255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
      display(){
      // console.log(this.body.speed
       // );
       var pos=this.body.position;
       var angle = this.body.angle;
      if(this.body.speed<2.5){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      
      else{
       
          World.remove(world,this.body);
          push();
          this.Visiblity=this.Visiblity-1;
          pop();
      }
} 
Score(){
  if(this.Visiblity<0 && this.Visiblity>-105){
    score++
  }
}}
