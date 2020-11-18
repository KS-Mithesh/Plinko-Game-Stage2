class plinko{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x,pos.y,10,10);
    }
}