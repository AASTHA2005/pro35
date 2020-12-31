//Create variables here
var dog,dogImg,dogImg1,database,foods,foodstock;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogimg.png")
  dogImg1=loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg);
  dog.scale=0.15
  foodstock=database.ref('food')
  foodstock.on("value",rstock)
}


function draw() {  
background(46,139,87)
if(keyDown(UP_ARROW)){
wstock(foods)
dog.addImage(dogImg1) 
}
  drawSprites();
  text("food remine "+foods,17,200)
  //add styles here

}
function rstock(data){ foodS=data.val(); }
function wstock(x){ if(x<=0){ x=0; }else{ x=x-1; } database.ref('/').update({ Food:x }) }


