class Point{
    constructor(ctx,x,y,color){
        !color ? color = '#fff': color;
        this.ctx = ctx;
        this.position = {x: x, y: y};
        this.color = color;
        this.radius = 2;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI);
        this.ctx.fill();
    }
}