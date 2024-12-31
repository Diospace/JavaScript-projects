const typeTextSpan= document.querySelector(".typing-text");
const cursorSpan=document.querySelector(".cursor");

//list the texxt in an array
const textArray=["Website", "Web App","Mobile App","Solutions","Innovations","softwares"];

const typingDaley= 150;
const ErasingDelay=90;
const NextTextDelay=2000;

let textArrayIndex =0; // this we be use to select word or element in the textArray
let charIndex=0; // get a character in the selected word

function type(){
    if(!(cursorSpan.classList.contains("typing"))){
        cursorSpan.classList.add("typing")
    }

    //check if the present charIndex is lasser than the index of the selected word
    if(charIndex < textArray[textArrayIndex].length){
        typeTextSpan.textContent +=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDaley); // repeat the process
    }else{
           //check if the present charIndex is greater than the index of the selected word
           cursorSpan.classList.remove("typing");
           setTimeout(erase , NextTextDelay);

    }

    
}

function erase(){
    if(!(cursorSpan.classList.contains("typing"))){
        cursorSpan.classList.add("typing")
    }

    //if string is not entirely erased
   if(charIndex>0){
    typeTextSpan.textContent=textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase, ErasingDelay) // repeat the process
   }else{
    cursorSpan.classList.remove("typing");
    textArrayIndex++ //Moving to the next word in the textArray
    if(textArrayIndex >= textArray.length){
        textArrayIndex=0;
    }
    setTimeout(type,typingDaley + 1100);  //then start typing
   }

}

document.addEventListener('DOMContentLoaded', ()=>{
    //if array is not Empty
    if(textArray.length){
        setTimeout(type, NextTextDelay +250)
    }
})