//UNFINISHED

/*
        SECOND CANVAS - 1/2 PROBABILITY
    
*/


const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 200;
canvas4.height = 200;
const cw4 = canvas4.width;
const ch4 = canvas4.height;
const canvas4_CENTER = {x: cw4/2, y: ch4/2};

const OUTER_CIRCLE4 = new Circle(ctx4, canvas4_CENTER.x, canvas4_CENTER.y, cw4/4);
const CENTER_POINT4 = new Point(ctx4, canvas4_CENTER.x, canvas4_CENTER.y);

const EqualateralTriangle4 = new Triangle(ctx4,CENTER_POINT4,OUTER_CIRCLE4);
EqualateralTriangle4.drawPoints();
EqualateralTriangle4.draw();

OUTER_CIRCLE4.draw();
CENTER_POINT4.draw();

let Segmants4 = [];

function generateLines4(center,circle,triangle){  
        return new Line(circle.ctx,
            randomPoint(center,circle),
            randomPoint(center,circle),
            'rgba(191, 149, 223,.2)', 'rgba(255,255,255,.2)',
            triangle);
    }