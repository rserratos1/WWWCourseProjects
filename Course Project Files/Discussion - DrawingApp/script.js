const canvas= document.getElementById("myCanvas");
const clearB = document.getElementById("clearCanvas");
const sizeSlider = document.getElementById("size-slider")
const colorBtns = document.querySelectorAll(".colorOptions .option")

ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let isDrawing = false;
let brushWidth = 5;
let selectedColor = "black";

sizeSlider.addEventListener("input", () => {
    brushWidth = sizeSlider.value;
});

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".colorOptions .selected")?.classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = btn.getAttribute("data-color");
        ctx.strokeStyle = selectedColor;
    })
})

canvas.addEventListener("pointerdown", function(event){
    isDrawing = true;
    ctx.beginPath();

    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = brushWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const rect = canvas.getBoundingClientRect();
    ctx.moveTo(event.clientX - rect.left, event.clientY-rect.top);
    event.preventDefault();
})

canvas.addEventListener("pointermove", function(event){
    if(!isDrawing) return;

    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    ctx.stroke();

    event.preventDefault();
})

canvas.addEventListener("pointerup", function(){
    isDrawing = false;
})

canvas.addEventListener("pointerout", function(){
    isDrawing = false;
})

clearB.addEventListener("click", function(event){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})