class String{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.String = Constraint.create(options);
        World.add(world, this.String);
        }
        display(){
            var pointA= this.String.bodyA.position;
            var pointB= this.String.bodyB.position;

           
            strokeWeight (1)
            var JointX = pointA.x
            var JointY = pointA.y
            
            var Joint1X = pointB.x+this.offsetX
            var Joint1Y = pointB.y+this.offsetY
            line (JointX,JointY,Joint1X,Joint1Y);
        }
        
}
