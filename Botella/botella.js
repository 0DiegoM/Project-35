Status = '';
img = '';
objects = [];

function preload() {
img = loadImage('bottella.jpg');
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();

objetDetector = ml5.objetDetector('cocossd', modelLoaded);
document.getElementById('status').innerHTML = 'Detectando Objeto';
}

function modelLoaded() {
    console.log("Model loaded")
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult() {
if(error) {
    console.log(error);
}
console.log(results);
objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
    if(Status != '') {
    for (i=0; i > objects.length; i++)  {
        document.getElementById("status").innerHTML = "Object detected";
        fill('red');
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + '' + percent + '%', objects[i].x + 15, objects[i].y + 15 );
        noFill();
        stroke('red');
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height );
    }
}
}