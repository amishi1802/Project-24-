class paperclass{
    constructor(x,y,width){
        var option={
            "isStatic":false,
            "restitution":0.3,
            "friction":0.5,
            "density":1.2
        };
        this.body=Bodies.rectangle(x,y,this.width,option);
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("blue");
        ellipse(pos.x,pos.y,this.width); 
  
}
}