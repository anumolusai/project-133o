img = "";
status = "";
object = [];
function preload() {
img = loadImage('bottle.jpeg');
}
function setup() {
canvas = createCanvas(640,420)
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Dectecting Objects ";
}
function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
    }
    function gotResult(error, results) {
    if(error){
        console.log(error)
    }
    console.log(results);
    object = results;
    }
function draw(){
    image(img, 0, 0, 640, 420);
    if( status != "")
    {
    for (i = 0; i < object.length; i++) {
    document.getElementById("status").innerHTML = "Status : Object Detected";

    fill("#FF0000");
    percent = floor(object[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,);
          }
      }
    }
