class Circle{
    constructor(ctx,x,y,r,color){
        !color ? color = '#fff': color;
        this.ctx = ctx;
        this.position = {x: x, y: y};
        this.radius = r;
        this.color = color;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI);
        this.ctx.stroke()
    }
}