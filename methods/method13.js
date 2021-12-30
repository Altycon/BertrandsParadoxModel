

/*
        SECOND CANVAS - 1/3 PROBABILITY
    
*/

const LongestThirdsSum1Display = document.getElementById('LongestThirdsSum1'),
        LongestThirdsSum2Display = document.getElementById('LongestThirdsSum2'),
        ShortestThirdsSum1Display = document.getElementById('ShortestThirdsSum1'),
        ThirdsProbabilityDisplay = document.getElementById('ThirdsProbability');


const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 200;
canvas2.height = 200;
const cw2 = canvas2.width;
const ch2 = canvas2.height;
const canvas2_CENTER = {x: cw2/2, y: ch2/2};

const OUTER_CIRCLE2 = new Circle(ctx2, canvas2_CENTER.x, canvas2_CENTER.y, cw2/4);
const CENTER_POINT2 = new Point(ctx2, canvas2_CENTER.x, canvas2_CENTER.y);

const EqualateralTriangle2 = new Triangle(ctx2,CENTER_POINT2,OUTER_CIRCLE2);
EqualateralTriangle2.drawPoints();
EqualateralTriangle2.draw();

OUTER_CIRCLE2.draw();
CENTER_POINT2.draw();

let Segmants2 = [];

let longestThirds = 0;
let shortestThirds = 0;

function setThirdsDisplay(line){
        line.length() > line.triangle.sideLength() ? longestThirds++ : shortestThirds++;
        LongestThirdsSum1Display.innerText = longestThirds;
        LongestThirdsSum2Display.innerText = longestThirds;
        ShortestThirdsSum1Display.innerText = shortestThirds;
        let n = longestThirds / (longestThirds+shortestThirds);
        ThirdsProbabilityDisplay.innerText = n.toFixed(4);
}

function generateLines2(center,circle,triangle){ 
        const line = new Line(circle.ctx,
            randomPoint(center,circle),
            randomPoint(center,circle),
            'rgba(166, 248, 227,.2)', 'rgba(255,255,255,.2)',
            triangle);
        setThirdsDisplay(line);
        return line;
}


