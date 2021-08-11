canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_imag=["mars_photo1","marsphoto2","marsphoto3","mars.png"] 
randomnumber=Math.floor(Math.random()*4); 
background_img=background_imag[randomnumber]
rover_img="rover.png";

function add(){
background_img_tag= new Image();
background_img_tag.onload=uploadbackground;
background_img_tag.src=background_img;

rover_img_tag= new Image();
rover_img_tag.onload=uploadrover;
rover_img_tag.src=rover_img;
}
function uploadbackground(){
ctx. drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
ctx. drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38'){
    up();
    console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
        if (keypressed=='37'){
            left();
            console.log("left");
        }
            if (keypressed=='39'){
                right();
                console.log("right")
            }    
    }
        
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arow prwssed,x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }

}


function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arow pressed,x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }

}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when down arow pressed,x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }

}


function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when down arow pressed,x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }

}
