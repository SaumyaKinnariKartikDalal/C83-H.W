var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var mouseEvent = "";
    var lastx, lasty;
    
    var width = screen.width;
    var height = screen.height;
    newwidth = width - 70;
    newheight = height - 300;
    
    if (width<992) {
        canvas.width = newwidth;
        canvas.height = newheight;
        document.body.style.overflow = "hidden";
    }


    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e){
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e){
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    
function clearArea(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}


canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    mouseEvent = "mousedown";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
    console.log(mouseEvent);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=3;
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(mouse_x, mouse_y)
        ctx.stroke();
    }

    lastx = mouse_x
    lasty = mouse_y
}