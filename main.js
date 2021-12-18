canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var mouseEvent = "";

var last_pos_of_x, last_pos_of_y;

var color = "black";
var width_of_line = 3;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        
        console.log("last position of X & Y");
        console.log(last_pos_of_x, last_pos_of_y);
        
        ctx.moveTo(last_pos_of_x, last_pos_of_y);
        
        console.log("current position of X & Y");
        console.log(current_position_of_mouse_x, current_position_of_mouse_y);
        
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_pos_of_x = current_position_of_mouse_x;
    last_pos_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}
function clearArea() {
    ctx.clearRect(0, 0, 800, 600);
}