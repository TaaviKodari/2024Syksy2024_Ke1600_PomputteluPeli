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
    
}

function draw_paddle(){
    rect(mouseX,paddleYPosition,paddleWidth,paddleHeight);
}


class Ghost{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 30;
        this.height = 30;
        this.xSpeed = 1;
        this.ySpeed = -1;
        this.gravity = 0.05;
    }
    
    Move(){
        
        image(ghostImage,this.x,this.y,this.width,this.height);
        
    }
}