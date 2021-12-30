
const log = console.log;

const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');
canvas1.width = innerWidth;
canvas1.height = innerHeight;
const cw = canvas1.width;
const ch = canvas1.height;
const canvas1_CENTER = {x: cw/2, y: ch/2};

class Circle{
    constructor(ctx,x,y,r,color){
        !color ? color = '#000': color;
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
class Point{
    constructor(ctx,x,y,color){
        !color ? color = '#000': color;
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

class Line{
    constructor(ctx,point1,point2,color1, color2){
        this.ctx = ctx;
        this.point1 = point1;
        this.point2 = point2;
        this.color1 = color1;
        this.color2 = color2;
        this.length = () => Math.hypot(this.point1.position.x - this.point2.position.x, this.point1.position.y - this.point2.position.y);
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.length() > EqualateralTriangle.sideLength() ? this.color1: this.color2;
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.stroke();
    }
}

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
        this.ctx.strokeStyle = this.color;
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.stroke();
    }
    drawSecondLine(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.moveTo(this.point2.position.x, this.point2.position.y);
        this.ctx.lineTo(this.point3.position.x, this.point3.position.y);
        this.ctx.stroke();
    }
    drawThirdLine(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.moveTo(this.point3.position.x, this.point3.position.y);
        this.ctx.lineTo(this.point1.position.x, this.point1.position.y);
        this.ctx.stroke();
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.moveTo(this.point1.position.x, this.point1.position.y);
        this.ctx.lineTo(this.point2.position.x, this.point2.position.y);
        this.ctx.lineTo(this.point3.position.x, this.point3.position.y);
        this.ctx.closePath();
        this.ctx.stroke(); 
    }
}

const OUTER_CIRCLE = new Circle(ctx, canvas1_CENTER.x, canvas1_CENTER.y, 200);
const CENTER_POINT = new Point(ctx, canvas1_CENTER.x, canvas1_CENTER.y);

const EqualateralTriangle = new Triangle(ctx,CENTER_POINT,OUTER_CIRCLE);
EqualateralTriangle.drawPoints();
EqualateralTriangle.draw();


OUTER_CIRCLE.draw();
CENTER_POINT.draw();

function randomRange(min,max){
    return Math.random() * (max - min) + min;
}

function randomPoint(center,circle){
    let theta = randomRange(0,Math.PI*2);
    let x = center.position.x + circle.radius * Math.cos(theta);
    let y = center.position.y + circle.radius * Math.sin(theta);
    return new Point(circle.ctx,x,y);
}

function generateLine(center,circle){  
    return new Line(ctx,
        randomPoint(center,circle),
        randomPoint(center,circle),
        'rgba(0,0,255,.3', 'rgba(0,0,0,.3');
}


function clearDisplay(ctx){
    ctx.clearRect(0,0,cw,ch);
}

let Segmants = [];

let count = 0;
let interval;


function animate(){
    clearDisplay(ctx);

    if(count > 5000){
        interval = cancelAnimationFrame(interval);
    }else{
        Segmants.push(generateLine(CENTER_POINT,OUTER_CIRCLE));  
    }
    Segmants.forEach(seg => seg.draw());
    
    OUTER_CIRCLE.draw();
    CENTER_POINT.draw();
    //EqualateralTriangle.draw();
    count++;
    interval = window.requestAnimationFrame(animate);
}
//window.requestAnimationFrame(animate);