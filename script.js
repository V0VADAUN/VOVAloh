const poga = document.querySelector('button');

const buttonHeight = 100;
const buttonWidth = 250;

const maxWidth = window.innerWidth
const maxHeight = window.innerHeight

poga.addEventListener('mouseover',() => {
    poga.style.top = Math.floor(Math.random()
    * maxHeight) + "px"
    poga.style.left = Math.floor(Math.random()
    * maxWidth) + "px"
})

document.getElementById("poga222").addEventListener("click", function(){ 
    document.getElementById("poga222").innerHTML = "1592483 из 1592483 опрошеных с вами согласны";
 });