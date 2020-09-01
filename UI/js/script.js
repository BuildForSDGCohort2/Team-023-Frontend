window.onload=()=>{
const img=document.querySelector("#img");
const popup =document.querySelector("#popup");
const close =document.querySelector(".close")
     img.addEventListener("click",()=>{
         popup.style.display="block";
        
     })
     close.addEventListener("click",()=> popup.style.display="none")

    
}