window.onload = drawSmileyFace;

function drawSmileyFace() {
    var canvas = document.getElementById("smiley");
    var context = canvas.getContext("2d");

    // face
    context.beginPath();
    context.arc(300, 					// x   x,y is at the center
                300, 					// y
                200, 					// arc radius
                0, 						// starting angle
                degreesToRadians(360),	// ending angle
                true);					// counter-clockwise
    context.fillStyle = "#ffffcc";
    context.fill();
    context.stroke();

    // left eye
    context.beginPath();
    context.arc(200, 250, 25, 0, degreesToRadians(360), true);
    context.stroke();

    // right eye
    context.beginPath();
    context.arc(400, 250, 25, 0, degreesToRadians(360), true);
    context.stroke();

    // nose
    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(300, 350);
    context.stroke();

    // start angle is to the right of the center point. So to draw a
    // semi-circle that's open at the top, like for the mouth in a 
    // smile, you need to draw in a clockwise direction.
    // angle is the number of degrees we take off the edges of the 
    // semi circle to give a more realistic mouth look.
    //
    context.beginPath();
    context.arc(300, 350, 75, degreesToRadians(20), degreesToRadians(160), false);

    
    //var angle = degreesToRadians(20);
    //context.arc(300, 350, 75, angle, Math.PI-angle, false);

    context.stroke();

}

function degreesToRadians(degrees) {
    radians = (degrees * Math.PI)/180;
    return radians;
}

