//UNFINISHED

/*
        SECOND CANVAS - 1/4 PROBABILITY
    
*/


const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 200;
canvas3.height = 200;
const cw3 = canvas3.width;
const ch3 = canvas3.height;
const canvas3_CENTER = {x: cw3/2, y: ch3/2};

const OUTER_CIRCLE3 = new Circle(ctx3, canvas3_CENTER.x, canvas3_CENTER.y, cw3/4);
const CENTER_POINT3 = new Point(ctx3, canvas3_CENTER.x, canvas3_CENTER.y);
const INNER_CIRCLE3 = new Circle(ctx3, canvas3_CENTER.x, canvas3_CENTER.y, OUTER_CIRCLE3.radius/2 )

const EqualateralTriangle3 = new Triangle(ctx3,CENTER_POINT3,OUTER_CIRCLE3);
EqualateralTriangle3.drawPoints();
EqualateralTriangle3.draw();

OUTER_CIRCLE3.draw();
CENTER_POINT3.draw();

let Segmants3 = [];

function generateLines3(center,circle,triangle){
        const line = new Line(circle.ctx,
            randomPoint(center,circle),
            randomPoint(center,circle),
            'rgba(255, 255, 143,.2)', 'rgba(255,255,255,.2)',
            triangle);
        return line;
}

let rl = generateLines3(CENTER_POINT3,OUTER_CIRCLE3,EqualateralTriangle3);