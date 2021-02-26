Psuedocode for inverting a function  
------------------------------------

func invert(y):
    let x0 = 0 
    let dx = function(|f(x0), f(x0+0.0001)|)
    if ( |f(x0-dx) - y| < |f(x0+dx) - y| ) 
        then do dx=-dx;
    else dx is positive


while ( |f(x0) - y| > |f(x0+dx) - y| ) 
    do x0 += dx;

until a match is found 
then min (f(x) - y0)**2
