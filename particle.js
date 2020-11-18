class particle{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{restitution:1});
        World.add(world,this.body);

        this.c   = Math.round(random(50,255));
        this.co  = Math.round(random(50,255));
        this.col = Math.round(random(50,255));
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(this.c,this.co,this.col);
        ellipse(pos.x,pos.y,10,10);
    }
}