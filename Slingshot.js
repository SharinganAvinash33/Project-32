class Slingshot{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            pointB:bodyB,
            stiffness:0.02
        }
        this.pointB=bodyB;
        this.Sling=Matter.Constraint.create(option);
        World.add(world,this.Sling);
    }
    display(){
        if(this.Sling.bodyA){

        
        var pointA=this.Sling.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(5);
        stroke(63,224,208);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
    fly(){
        this.Sling.bodyA=null;
    }
    attach(bodyA,pointB){
    	var option={
		bodyA:bodyA,
		pointB:pointB,
		stiffness:0.02
		}
		this.pointB=pointB
    	this.Sling=Matter.Constraint.create(option);
    	World.add(world,this.Sling);
 		if(this.Sling.bodyA){
        var pointA=this.Sling.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke(63,224,208);
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        
 		}   

	
}
}