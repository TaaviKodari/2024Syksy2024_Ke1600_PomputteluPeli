let paddleWidth = 80;
let paddleHeight = 30;
let paddleYPosition = 400;

let gameHeight;
let gameWidth;

let ghostImage;
let olioLista = [];

let bgImage;

let score = 0;
let lives = 3;
//let timer = 10;

//let ghostOlio;
//let ghostOlio2;

function preload(){
    ghostImage = loadImage("Images/ghost.png");
    bgImage = loadImage("Images/bg.jpg");
}

function setup(){
    gameWidth = windowWidth;
    gameHeight = windowWidth /3;

    paddleYPosition =  gameHeight - paddleHeight;

    createCanvas(gameWidth,gameHeight);
    background("black");
    luo_olio();
    //Aloita_timer();
    //ghostOlio = new Ghost();
    //ghostOlio2 = new Ghost();
}

//Function timer(){timer = timer -1; if(timer <= 0){noLoop; gameover()} setTimeOut(timer)}
function draw(){
    //background("black");
    piirra_tausta();
    draw_paddle();
    //ghostOlio.Move();
    //ghostOlio2.Move();
    liikuta_olioita();
    piirra_UI();
}

function draw_paddle(){
    rect(mouseX,paddleYPosition,paddleWidth,paddleHeight);
}

function piirra_tausta(){
    image(bgImage,0,0,gameWidth,gameHeight);
}

function luo_olio(){
    let uusiOlio = new Ghost();
    olioLista.unshift(uusiOlio);
    //console.log(olioLista);
    setTimeout(luo_olio,2000);
}

function liikuta_olioita(){
    olioLista.forEach(function(olio,index){
        olio.Move();

        if(olio.y > gameHeight){
            olioLista.splice(index,1);
            lives = lives - 1;
            if(lives < 0){
                gameOver();
            }
        }

        if(olio.x > gameWidth){
            olioLista.splice(index,1);
            score = score +1;
        }

    })
}

function gameOver(){
    noLoop();
    textSize(50);
    textAlign(CENTER);
    fill("red");
    text('GAME OVER',gameWidth/2,gameHeight/2);
}

function piirra_UI(){
    textSize(20)
    textAlign(LEFT, TOP);
    fill("white");
    text('Score: ' + score + '\nLives: ' + lives,5,10);
}

class Ghost{
    constructor(){
        this.x = random(-10,0);
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