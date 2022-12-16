Status = '';
img = '';

function preload() {
img = loadimage('');
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();

objetDetector = ml5.objetDetector('cocossd', modelLoaded);
document.getElementById('status').innerHTML = 'Detectando Objeto';
}

function modelLoaded() {
    console.log("Model loaded")
}

function gotresult() {
if(error) {
    console.log(error);
}
}