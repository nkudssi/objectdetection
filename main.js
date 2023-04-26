img = [];
index = 0;

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

    }
}

function draw() {
    image(img[index],0,0,650,450)
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