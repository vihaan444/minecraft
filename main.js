var canvas= new fabric.Canvas('myCanvas');

player_x= 10;
player_y= 10;

block_image_width= 30;
block_image_height= 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
    fabric.image.fromURL("player.png", function(img) {
    player_object= img;

    player_object.scaleToWidth(150);
    player_object.scaleToheight(140);
    player_object.set({
        top: player_y,
        left: player_x
    });
    canvas.add(player_object);
});
}

function new_image(get_image)
{
    fabric.image.fromURL("get_image", function(img) {
    block_image_object= img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToheight(block_image_height);
    block_image_object.set({
        top: player_y,
        left: player_x
    });
    canvas.add(block_image_object);
});
}

function up()
{
    if(player_y >=0)
    {
    player_y= player_y-block_image_height;
    console.log("block_image_height" +block_image_height)
    console.log("when up arrow key is pressed, x= "+ player_x +",y ="+ player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function down()
{
    if(player_y >=0)
    {
    player_y= player_y+block_image_height;
    console.log("block_image_height" +block_image_height)
    console.log("when down arrow key is pressed, x= "+ player_x +",y ="+ player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function left()
{
    if(player_x >=0)
    {
    player_x= player_x-block_image_width;
    console.log("block_image_width" +block_image_width)
    console.log("when left arrow key is pressed, x= "+ player_x +",y ="+ player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function right()
{
    if(player_x >=0)
    {
    player_x= player_x+block_image_width;
    console.log("block_image_width" +block_image_width)
    console.log("when right arrow key is pressed, x= "+ player_x +",y ="+ player_y);
    canvas.remove(player_object);
    player_update();
    }
}