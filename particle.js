class Particle{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.7
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}