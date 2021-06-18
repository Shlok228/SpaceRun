class Ship{
    constructor(x,y){
        var options = {
            'density' :1 , 
            'airFriction' :0.01 ,
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x,y,130,130,options);
        this.width = 130;
        this.height = 130;
        World.add(world,this.body);
        Matter.Body.setMass(this.body,this.body.mass*2)
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}