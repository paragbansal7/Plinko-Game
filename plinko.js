class Plinko{
    constructor(x,y){
        var options={isStatic:true}

        this.radius = 10;
        this.body = Bodies.circle(x,y,this.radius,options)
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