let titulo = 0;
let url_image = 0;
let qtd_perguntas = 0;
let qtd_niveis = 0;




function expande(element) {
    const pergunta = element.parentElement.parentElement;
    const filhos = pergunta.childElementCount;

    if (!pergunta.classList.contains("expandir")) {
        pergunta.classList.add("expandir");
        element.querySelector("ion-icon").style.color = "#FFFFFF";
        if (filhos === 1) {
            pergunta.style.height = "480px"
        } else {
            pergunta.style.height = "740px";
        }

    } else {
        pergunta.classList.remove("expandir");
        pergunta.style.height = "90px"
        element.querySelector("ion-icon").style.color = "#000000";
    }
}



function chamarPeguntas(content) {

    titulo = content.titulo.value;
    url_image = content.url_image.value;
    qtd_perguntas = content.qtd_perguntas.value;
    qtd_niveis = content.qtd_niveis.value;
    localStorage.setItem("qtd_niveis",qtd_niveis);
    localStorage.setItem("qtd_pergunta", qtd_perguntas);

    // console.log("titulo: " + titulo);
    // console.log("url: " + url_image);
    // console.log("qtd perguntas: " + qtd_perguntas);
    // console.log("qtd niveis: " + qtd_niveis);

    return false;

}

function criarPeguntas() {
    const  content_quiz = document.querySelector(".content-quiz");
    qtd_perguntas = localStorage.getItem("qtd_pergunta")
    qtd_perguntas = parseInt(qtd_perguntas);
    

    for (let i = 0; i < 1; i++) {
        
        content_quiz.innerHTML += `
                        <div class="pergunta">
                                    <div>
                                        <div onclick="expande(this)">
                                            <p>Pergunta</p>
                                            <ion-icon name="create-outline"></ion-icon>
                                        </div>
                                        <input name="pergunta${i}" placeholder="Texto da pergunta: no mínimo 20 caracteres" minlength="20" type="text" required>
                                        <input name="cor${i}" placeholder="Cor de Fundos da Pergunta:" type="text"
                                        minlength="7" maxlength="7"  pattern="^#([A-Fa-f0-9]{6})$" required>
                                    </div>
                                    <div>
                                        <p>Reposta correta</p>
                                        <input name="correta${i}" placeholder="Resposta correta" type="text" required>
                                        <input name="url_correta${i}" placeholder="URL da imagem" type="url" required>
                                    </div>
                                    <div>
                                        <p>Reposta incorretas</p>
                                        <input name="incorreta1_${i}" placeholder="Resposta incorreta 1" type="text" required>
                                        <input name="url_incorreta1_${i}" placeholder="URL da imagem" type="url" required>
                                        <input name="incorreta2_${i}" placeholder="Resposta incorreta 2" type="url">
                                        <input name="url_incorreta2_${i}" placeholder="URL da imagem" type="text">
                                        <input name="incorreta3_${i}" placeholder="Resposta incorreta 3" type="text">
                                        <input name="url_incorreta3_${i}" placeholder="URL da imagem" type="url">
                                    </div>
                        </div>`
    }
    content_quiz.innerHTML += `<input class="button-quiz" type="submit" value="Prosseguir pra cria níveis">    `
}

function guardaPerguntas(content){
    //adicionar função quando for acessar a API;
    console.log(content)
    return false;
}

function criarNiveis(){
    alert("Deu certo");
}

function form(content) {
    alert("deucerto " + content.titulo.value);
    return false;
}

