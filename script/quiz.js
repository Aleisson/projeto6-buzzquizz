
function expande(element){
    const pergunta = element.parentElement.parentElement;
    if (!pergunta.classList.contains("expandir")) {
        pergunta.classList.add("expandir");
        pergunta.style.height = "600px";
    } else{
       pergunta.classList.remove("expandir");
       pergunta.style.height = "64px"
    }
}