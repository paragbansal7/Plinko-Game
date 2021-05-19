class Plinko{
    constructor(x,y){
        var options={isStatic:true}

        this.body = Bodies.circle(x,y,radius,options)
        this.radius = 10;
        World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        fill(255);
        stroke(0);
        strokeWeight(3);
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }

}