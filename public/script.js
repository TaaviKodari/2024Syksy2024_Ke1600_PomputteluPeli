let paddleWidth = 55;
let paddleHeight = 30;
let paddleYPosition = 400;
let ghostImage;

function preload(){
    ghostImage = loadImage("Images/ghost.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background("black");
}

function draw(){
    background("black");
    draw_paddle();
    image(ghostImage,0,0,64,64);

}

function draw_paddle(){
    rect(mouseX,paddleYPosition,paddleWidth,paddleHeight);
}