/**
 * Created by yooranchen on 3/5/16.
 */
var myCanvas, context;

window.onload = function () {
    myCanvas = document.getElementById("myCanvas");
    context = myCanvas.getContext("2d");
    //draw();
    drawImage();
};

function draw() {
    context.fillStyle = "#ff0000";
    //context.rotate(20);
    context.fillRect(0, 0, 100, 100);
}

function drawImage() {
    var img = new Image();
    img.src = "logo.jpg";
    img.onload = function () {
        var width = img.width;
        var height = img.height;
        myCanvas.width = width;
        myCanvas.head = height;
        context.drawImage(img,0,0)
    };
}