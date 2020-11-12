console.log("background_image = " + background_image); car_image = "car1.png";
console.log("background_image = " + background_image); car2_image = "car1 (1).png";
  car_width = 100;
  car_height = 90;
  car2_width = 100;
  car2_height = 90;
   background_image = "racing back.jpg";
    car_image = "car1.png";
    car2_image = "car1 (1).png";
    car_x = 10; 
     car_y = 10;
     car2_x = 10; 
     car2_y = 10;
function add() {
     background_imgTag = new Image();
      //defining a variable with a new image
       background_imgTag.onload = uploadBackground ;
        // setting a function, onloading this variable
         background_imgTag.src = background_image;
          // load image 
          car_imgTag = new Image();
           //defining a variable with a new image
             car_imgTag.onload = uploadrover;
            // setting a function, onloading this variable
              car_imgTag.src = rover_image;
              // load image
              car2_imgTag = new Image();
              //defining a variable with a new image
                car2_imgTag.onload = uploadrover;
               // setting a function, onloading this variable
                 car2_imgTag.src = rover_image;
                 // load image
              }
function uploadBackground() { 
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 } 
  function uploadrover() { 
      ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); 
    }
window.addEventListener("keydown", my_keydown); 
function my_keydown(e){ 
 keyPressed = e.keyCode;
     console.log(keyPressed);
      if(keyPressed == '38') 
     { 
         up();
          console.log("up");
         } 
         if(keyPressed == '40') {
              down(); console.log("down");  
                } 
             if(keyPressed == '37') { 
                 left();
                 console.log("left");
                 } 
                 if(keyPressed == '39') { 
                     right(); 
                     console.log("right");
                    }
} 