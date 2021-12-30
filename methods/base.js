

/*
        FIRST CANVAS - BASE PROBABILITY

    Showing a random distribution of random length lines
    inside a circle based on two random points on the 
    circumference of a circle
    
*/

const LineCountDisplay = document.getElementById('BaseLineCount');


const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
canvas1.width = 200;
canvas1.height = 200;
const cw1 = canvas1.width;
const ch1 = canvas1.height;
const canvas1_CENTER = {x: cw1/2, y: ch1/2};

const OUTER_CIRCLE1 = new Circle(ctx1, canvas1_CENTER.x, canvas1_CENTER.y, cw1/4);
const CENTER_POINT1 = new Point(ctx1, canvas1_CENTER.x, canvas1_CENTER.y);

const EqualateralTriangle1 = new Triangle(ctx1,CENTER_POINT1,OUTER_CIRCLE1);
EqualateralTriangle1.drawPoints();
EqualateralTriangle1.draw();

OUTER_CIRCLE1.draw();
CENTER_POINT1.draw();

let Segmants1 = [];

function generateLines1(center,circle,triangle){
    return new Line(circle.ctx,
        randomPoint(center,circle),
        randomPoint(center,circle),
        'rgba(255,255,255,.2)', 'rgba(255,255,255,.2)',
        triangle);
}

function displayBaseLineCount(display,num){
    display.innerText = num;
}