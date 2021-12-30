//UNFINISHED

let count = 0;
let interval;

let lineCount = 0;

function animate(){
    displayBaseLineCount(LineCountDisplay,lineCount);
    clearDisplay(ctx1,cw1,ch1);
    clearDisplay(ctx2,cw2,ch2);
    clearDisplay(ctx3,cw3,ch3);
    clearDisplay(ctx4,cw4,ch4);

    if(count > 1000){
        interval = cancelAnimationFrame(interval);
    }else{
        Segmants1.push(generateLines1(CENTER_POINT1,OUTER_CIRCLE1, EqualateralTriangle1));
        lineCount++;
        Segmants2.push(generateLines2(CENTER_POINT2,OUTER_CIRCLE2, EqualateralTriangle2));
        //Segmants3.push(generateLines3(CENTER_POINT3,OUTER_CIRCLE3, EqualateralTriangle3));
        Segmants4.push(generateLines4(CENTER_POINT4,OUTER_CIRCLE4, EqualateralTriangle4));  
    }
    
    Segmants1.forEach(seg => seg.drawBase());
    Segmants2.forEach(seg => seg.drawThirds());
    //Segmants3.forEach(seg => seg.drawFourths());
    Segmants4.forEach(seg => seg.drawHalves());
    
    OUTER_CIRCLE1.draw();
    CENTER_POINT1.draw();

    OUTER_CIRCLE2.draw();
    CENTER_POINT2.draw();

    OUTER_CIRCLE3.draw();
    CENTER_POINT3.draw();
    INNER_CIRCLE3.draw();
    rl.drawMidPoint();

    OUTER_CIRCLE4.draw();
    CENTER_POINT4.draw();
    //EqualateralTriangle1.draw();
    EqualateralTriangle3.draw()
    count++;
    interval = window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);



