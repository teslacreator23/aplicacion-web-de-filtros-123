function preload(){

}

camera = document.getElementById("camera");



function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

function setup(){
   canvas= createCanvas(300,300)
   canvas.center()
   canvas.position(110, 250);
}

function draw(){

}
function modelLoaded(){
console.log('posenet esta inicializando')
}

