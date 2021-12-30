//UNFINISHED

const log = console.log;

function randomRange(min,max){
    return Math.random() * (max - min) + min;
}

function randomPoint(center,circle){
    let theta = randomRange(0,Math.PI*2);
    let x = center.position.x + circle.radius * Math.cos(theta);
    let y = center.position.y + circle.radius * Math.sin(theta);
    return new Point(circle.ctx,x,y);
}

function clearDisplay(ctx,w,h){
    ctx.clearRect(0,0,w,h);
}