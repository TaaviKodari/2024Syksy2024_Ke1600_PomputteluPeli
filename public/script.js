let paddleWidth = 55;
let paddleHeight = 30;
let paddleYPosition = 400;

let gameHeight;
let gameWidth;

let ghostImage;

let ghostOlio;
let ghostOlio2;

function preload(){
    ghostImage = loadImage("Images/ghost.png");
}

function setup(){
    gameWidth = windowWidth;
    gameHeight = windowWidth /3;

    paddleYPosition =  gameHeight - paddleHeight;

    createCanvas(gameWidth,gameHeight);
    background("black");
    ghostOlio = new Ghost();
    ghostOlio2 = new Ghost();
}

function draw(){
    background("black");
    draw_paddle();
    ghostOlio.Move();
    ghostOlio2.Move();
}

function draw_paddle(){
    rect(mouseX,paddleYPosition,paddleWidth,paddleHeight);
}


class Ghost{
    constructor(){
        this.x = 0;
        this.y = random(0,50);
        this.width = 30;
        this.height = 30;
        this.xSpeed = random(1,4);
        this.ySpeed = -1;
        this.gravity = 0.05;
    }
    
    Move(){
        this.x = this.x + this.xSpeed;

        this.ySpeed = this.ySpeed + this.gravity;

        if(this.y > paddleYPosition){
            if(this.x > mouseX && this.x < mouseX + paddleWidth){
                this.ySpeed = -abs(this.ySpeed);
            }
        }

        this.y = this.y + this.ySpeed;
        image(ghostImage,this.x,this.y,this.width,this.height);
        
    }
}