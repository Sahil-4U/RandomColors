let containerEl=document.querySelector(".container");

for(let i=0;i<35;i++){
    let colorContainerEl=document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}
const colorContainerEls=document.querySelectorAll(".color-container");
randomColorGen();
function randomColorGen(){
 colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode=randomColors();
    colorContainerEl.style.backgroundColor="#"+newColorCode;
    colorContainerEl.innerText="#"+newColorCode;
 });
}
function randomColors(){
const chars="0123456789abcdef";
const colorCodeLength=6;
let colorCode="";
for(let i=0;i<colorCodeLength;i++){
    const randomNum=Math.floor(Math.random()*chars.length);
    colorCode+=chars.substring(randomNum,randomNum+1);
}
return colorCode;
}
