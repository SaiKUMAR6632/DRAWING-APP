const canvas =document.getElementById("canvas");
const IncreaseBtn =document.getElementById("Increase");
const DecreaseBtn =document.getElementById("Decrease");
const sizeEl=document.getElementById("size");
const colorEl=document.getElementById("color");
const clearE1=document.getElementById("clear");
const ctx=canvas.getContext("2d");
let size=30;
let color='black';
let isPressed=false;
let x =undefined;
let y=undefined;
canvas.addEventListener("mousedown",(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;
});
canvas.addEventListener("mouseup",(e)=>{
    isPressed=false;
    x=undefined;
    y=undefined;
});
canvas.addEventListener("mousemove",(e)=>{
    if(isPressed){
        const x2=e.offsetX;
        const y2=e.offsetY;
        drawCircle(x2,y2);
        drawline(x,y,x2,y2);
        x=x2;
        y=y2;
    }
}); 
IncreaseBtn.addEventListener("click",()=>{
    size=size+5;
    if(size>50){
        size=50;
    }
    UpdateSizeonScreen();
});
DecreaseBtn.addEventListener("click",()=>{
    size=size-5;
    if(size<5){
        size=5;
    }
    UpdateSizeonScreen();
});
colorEl.addEventListener("change",(e)=>{
    color=e.target.value;
});
clearE1.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
function UpdateSizeonScreen(){
    sizeEl.innerText=size;
}
function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fill();
    ctx.fillStyle=color;
}
function drawline(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=size*2;
    ctx.stroke();
}
//function draw(){
    //ctx.clearRect(0,0,canvas.width,canvas.height);
   // drawCircle(x,y);
 //   requestAnimationFrame(draw);
//}
//draw();