const { fabric } = require("./fabric");

var canvas=new fabric.Canvas('myCanvas');
var width_block=30;
var height_block=30;
var player_x=30;
var player_y=30;
var player_object="";
var block_image="";
function player_update()
{
    fabric.Image.fromURL("avenger.jpg", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
    top:player_y,
    left:player_x
        });
        canvas.add(player_object);

    });
    }
    function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
 {
     keyPressed=e.keyCode;
     console.log(keyPressed);
     if(e.shiftKey==true&&keyPressed=='80')
     {
       console.log("p and shift pressed together");
       block_image_width=block_image_width+10;
       block_image_height=block_image_height+10;
       document.getElementById("current_width").innerHTML=block_image_width;
       document.getElementById("current_height").innerHTML=block_image_height;
     }
     if(e.shiftKey==true&&keyPressed=='77')
     {
       console.log("m and shift pressed together");
       block_image_width=block_image_width-10;
       block_image_height=block_image_height-10;
       document.getElementById("current_width").innerHTML=block_image_width;
       document.getElementById("current_height").innerHTML=block_image_height;
     }
     if(keyPressed=='38')
     {
         up();
         console.log("up");
     }
     if(keyPressed=='40')
     {
        down();
        console.log("down");
     }
     if(keyPressed=='37')
     {
       left();
        console.log("left");
     }
     if(keyPressed=='39')
     {
        right();
        console.log("right");
     }
    if(keyPressed=='98')
     {
        if(keyPressed=='98')
        {
           new_image('Birch_Planks_.png');
           console.log("b");
        }
        if(keyPressed=='68')
        {
           new_image('Block_of_Diamond.png');
           console.log("d");
        }
        if(keyPressed=='81')
        {
           new_image('Block_of_Nether_Quartz.png');
           console.log("q");
        }
        if(keyPressed=='71')
        {
           new_image('BlockOfGold.png');
           console.log("G");
        }
        if(keyPressed=='66')
        {
           new_image('brick.jpg');
           console.log("b");
        }