
function expande(element){
    const pergunta = element.parentElement.parentElement;
    const filhos = pergunta.childElementCount;
    
    if (!pergunta.classList.contains("expandir")) {
        pergunta.classList.add("expandir");
        element.querySelector("ion-icon").style.color = "#FFFFFF";
        if(filhos === 1){
            pergunta.style.height = "480px"
        }else{
            pergunta.style.height = "740px";
        }
        
    } else{
       pergunta.classList.remove("expandir");
       pergunta.style.height = "90px"
       element.querySelector("ion-icon").style.color = "#000000";
    }
}




function form(content){
  alert("Deu certo");
   return false;
}


function teste(){
    alert("Deu certo teste");
     return false;
  }