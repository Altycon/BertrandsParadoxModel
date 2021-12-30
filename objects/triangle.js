class Triangle{
    constructor(ctx,center,circle){
        this.ctx = ctx;
        this.center = center;
        this.circle = circle;
        this.theta1 = 270 * (Math.PI/180);
        this.theta2 = 30 * (Math.PI/180);
        this.theta3 = 150 * (Math.PI/180);
        this.point1 = this.findFirstPoint();
        this.point2 = this.findSecondPoint();
        this.point3 = this.findThirdPoint();
        this.sideLength = () => Math.hypot(this.point1.position.x - this.point2.position.x, this.point1.position.y - this.point2.position.y);
        
    }
    findFirstPoint(){
        let x = this.center.position.x + this.circle.radius * Math.cos(this.theta1);
        let y = this.center.position.y + this.circle.radius * Math.sin(this.theta1);
        return new Point(this.circle.ctx,x,y);
    }
    drawFirstPoint(){
        this.point1.draw();
    }
    findSecondPoint(){
        let x = this.center.position.x + this.circle.radius * Math.cos(this.theta2);
        let y = this.center.position.y + this.circle.radius * Math.sin(this.theta2);
        return new Point(this.circle.ctx,x,y);
    }
    drawSecondPoint(){
        this.point2.draw();
    }
    findThirdPoint(){
        let x = this.center.position.x + this.circle.radius * Math.cos(this.theta3);
        let y = this.center.position.y + this.circle.radius * Math.sin(this.theta3);
        return new Point(this.circle.ctx,x,y);
    }
    drawThirdPoint(){
        this.point3.draw();
    }
    drawPoints(){
        this.point1.draw();
        this.point2.draw();
        this.point3.draw();
    }
    drawFirstLine(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#fff';
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.stroke();
    }
    drawSecondLine(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#fff';
        this.ctx.moveTo(this.point2.position.x, this.point2.position.y);
        this.ctx.lineTo(this.point3.position.x, this.point3.position.y);
        this.ctx.stroke();
    }
    drawThirdLine(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#fff';
        this.ctx.moveTo(this.point3.position.x, this.point3.position.y);
        this.ctx.lineTo(this.point1.position.x, this.point1.position.y);
        this.ctx.stroke();
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#fff';
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.lineTo(this.point3.position.x, this.point3.position.y);
        this.ctx.closePath();
        this.ctx.stroke(); 
    }
}