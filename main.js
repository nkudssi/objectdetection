img = [];
index = 0;
Status = "";
object = [];

function preload() {
    img[0] = loadImage("bedroom.jpg");
    img[1] = loadImage("bottles.jpg");
    img[2] = loadImage("fruit.jpg");
    img[3] = loadImage("tv.jpg");
    img[4] = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(650,450);
    canvas.center();
    Objectdetector = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded() {
    console.log("ML");
    Objectdetector.detect(img[index], gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        object = result;
        Status=true;

    }
}

function draw() {
    image(img[index],0,0,650,450)
    if (Status) {
        for(i = 0; i < object.length; i++){
            fill("black");
            text(object[i].label, object[i].x+10, object[i].y+10)
            noFill();
            stroke("black");
            rect(object[i].x, object[i].y, object[i].width, object[i].height)
        }
    }
}

function back() {
    index -= 1;
    if (index<0) {
        index = 4;
    }
    Objectdetector.detect(img[index], gotResult);
}

function next() {
    index += 1;
    if (index>4) {
        index = 0;
    }
    Objectdetector.detect(img[index], gotResult);
}