var bkg,form;
var manager,managerImage;
var gameState=0;
var bkgImg,manager_speech;
var apply,applyImg;
var onion,onionImg;
var greenPepper,greenPepperImg;
var redPepper,redPepperImg;
var cheeseSlice,cheeseSliceImg;
var bread,breadImg;
var customer1,customer1Img;
var customer2,customer2Img;
var customer3,customer3Img;
var customer4,customer4Img;
var sandwich,sandwichImg;
var tomato,toamtoImg;
var counter;
var board,boardImg;
var dash;
var customer;



function preload(){
managerImage=loadImage('Images/manager1.png');
bkgImg=loadImage('Images/bkg1.jpg');
manager_speech=loadImage('Images/manager_speech.png');
applyImg=loadImage('Images/apply.png');
onionImg=loadImage('Images/onion.png');
greenPepperImg=loadImage('Images/greenPepper.png');
redPepperImg=loadImage('Images/redPepper.png');
cheeseSliceImg=loadImage('Images/cheese slice.png');
breadImg=loadImage('Images/bread.png');
tomatoImg=loadImage('Images/tomato.png');
customer1Img=loadImage('Images/customer1.png');
//customer2Img=loadImage('Images/customer2.jpg');
//customer3Img=loadImage('Images/customer3.jpg');
//customer4Img=loadImage('Images/customer4.jpg');
//sandwichImg=loadImage('Images/sandwich.jpg');
boardImg=loadImage('Images/board.jpg');

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  manager=new Manager();
  apply=new Apply();
 counter=new Counter();
 customer=new Customer();
}

function draw() {

  background(0,255,0); 
  if(gameState===0){
    form.display();
  }
  if(gameState===1){
background(bkgImg);
 manager.display();
  apply.display();
  } 
  if(gameState===2){
    
  background(bkgImg);
  counter.display();
  customer.display();
  }
  drawSprites();
}