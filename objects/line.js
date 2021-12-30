class Line{
    constructor(ctx,point1,point2,color1, color2, triangle){
        this.ctx = ctx;
        this.point1 = point1;
        this.point2 = point2;
        this.color1 = color1;
        this.color2 = color2;
        this.length = () => Math.hypot(this.point1.position.x - this.point2.position.x, this.point1.position.y - this.point2.position.y);
        this.triangle = triangle;
        this.lineCountForBase = 0;
        this.theta1 = 90 * (Math.PI/180);
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color1;
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.stroke();
    }
    drawBase(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color1;
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.stroke();
        this.lineCountForBase++;
    }
    drawThirds(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.length() > this.triangle.sideLength() ? this.color1: this.color2;
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.stroke();
        
    }
    drawFourths(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.length() > this.triangle.sideLength() ? this.color1: this.color2;
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.stroke();
    }
    drawHalves(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.length() > this.triangle.sideLength() ? this.color1: this.color2;
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.stroke();
    }
    findMidPoint(){
        let a = this.point2.position.x / 2;
        let b = this.point2.position.y / 2;
        return {x: a, y: b}
    }
    drawMidPoint(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'yellow';
        this.ctx.arc(this.findMidPoint().x, this.findMidPoint().y, 5, 0, 2*Math.PI);
        this.ctx.fill();
    }
    getDirection(){
        return Math.atan2(this.x, this.y);
    }
}