var data = [ [ "John", 50 ], [ "Bob", 25 ], [ "Beth", 25 ]]; 
var colors = [ "#00F000", "blue" ,"yellow" ]; 
 
var canvas = document.getElementById( "pie_canvas" ); 
var context = canvas.getContext( "2d" ); 
 
// get length of data array 
var dataLength = data.length; 
// declare variable to store the total of all values 
var total = 0; 
 
// calculate total 
for( var i = 0; i < dataLength; i++ ){ 
    // add data value to total 
    total += data[ i ][ 1 ]; 
} 
 
// declare X and Y coordinates of the mid-point and radius 
var x = 100; 
var y = 100; 
var radius = 100; 
 
// declare starting point (right of circle) 
var startingPoint = 0; 
 
for( var i = 0; i < dataLength; i++ ){ 
    // calculate percent of total for current value 
    var percent = data[ i ][ 1 ] * 100 / total; 
 
    // calculate end point using the percentage (2 is the final point for the chart) 
    var endPoint = startingPoint + ( 2 / 100 * percent ); 
 
    // draw chart segment for current element 
    context.beginPath();    
    // select corresponding color 
    context.fillStyle = colors[ i ]; 
    context.moveTo( x, y ); 
    context.arc( x, y, radius, startingPoint * Math.PI, endPoint * Math.PI );     
    context.fill(); 
 
    // starting point for next element 
    startingPoint = endPoint; 
}