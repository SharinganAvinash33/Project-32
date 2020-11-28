class Polygon extends SuperClass{
	constructor(x,y,width,height){
		super(x,y,width,height);
		this.image=loadImage("hexagon.png");
	}
	display(){
		var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+15, this.height+15);
        pop();
	}
	}
	

	