var bkg,form;
var manager,managerImage;




function preload(){
managerImage=loadImage('Images/manager1.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  manager=new Manager();
}

function draw() {

  background(0,255,0); 
  form.display(); 
  manager.display();
}