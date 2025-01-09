const date =document.querySelector(".Date");
const time= document.querySelector(".Time");

function Timer(){
    setInterval(()=>{
        let now =new Date();
        let Year= now.getFullYear();
        let Month= now.getMonth() +1;
        let Day= now.getDate();

        let Hours= now.getHours();
        let Minute= now.getMinutes();
        let Second= now.getSeconds();
        let MilliSecond=now.getMilliseconds();

        date.textContent=Year + "::" + Month + "::" + Day;
        time.textContent=Hours + "::"  + Minute + "::" + Second +"::" + MilliSecond ;
        
    },100)
}

document.addEventListener("DOMContentLoaded", ()=>{
    Timer();
})
