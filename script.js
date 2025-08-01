const soninput=document.getElementById("son-input");
const son=document.getElementById("son");
const send=document.getElementById("send");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const colorinput=document.getElementById("color-input");

send.addEventListener("click", ()=>{
    if (soninput.value.trim().length<1){
        alert("Raqam kiriting")
    }else{
        son.textContent=soninput.value;
    }
})

plus.addEventListener("click",()=>{
    son.textContent=+son.textContent+1;
})
minus.addEventListener("click",()=>{
    son.textContent=+son.textContent-1;
})
colorinput.addEventListener("click",()=>{
    son.style.color=colorinput.value;
})