let titulo = 0;
let url_image = 0;
let qtd_perguntas = 0;
let qtd_niveis = 0;
const url = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
let objeto_post = {
    title: "",
    image:"",
    questions:[]
}




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
    localStorage.setItem("qtd_pergunta", qtd_perguntas);
    localStorage.setItem("qtd_niveis",qtd_niveis);
   

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
    

    for (let i = 0; i < qtd_perguntas; i++) {
        
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
    const  content_quiz = document.querySelector(".content-quiz");
    qtd_niveis = localStorage.getItem("qtd_niveis")
    qtd_niveis = parseInt(qtd_niveis);
    
    for (let i = 0; i < 1; i++) {
        
        
        if (i === qtd_niveis - 1) {
            // trabalhei primeiro a excessão
            content_quiz.innerHTML +=`<div class="pergunta">
            <div>
                <div onclick="expande(this)">
                    <p>Nivel ${i + 1}</p>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
                <input name="titulo_nivel_${i}" placeholder="Título do nível" minlength="10" type="text" required>
                <input name="porcetagem${i}" placeholder="% de acerto mínima" min="0" max="0" type="number" required>
                <input name="url_porcetagem${i}" placeholder="URL da imagem do nível"  type="url" required>
                <textarea name="textarea${i}" placeholder="Descrição do nível" minlength="30" required></textarea>
            </div>
        </div>`
        }else{
            content_quiz.innerHTML +=`<div class="pergunta">
                                            <div>
                                            <div onclick="expande(this)">
                                            <p>Nivel ${i + 1}</p>
                                            <ion-icon name="create-outline"></ion-icon>
                                            </div>
                                            <input name="titulo_nivel_${i}" placeholder="Título do nível" minlength="10" type="text" required>
                                            <input name="porcetagem${i}" placeholder="% de acerto mínima" min="0" max="100" type="number" required>
                                            <input name="url_porcetagem${i}" placeholder="URL da imagem do nível"  type="url" required>
                                            <textarea name="textarea${i}" placeholder="Descrição do nível" minlength="30" required></textarea>
                                            </div>
                                        </div>`
        }
  
        
    }

    content_quiz.innerHTML += ` <input class="button-quiz" type="submit" value="Prosseguir pra cria níveis">`
}

function guardarNiveis(content){

    alert("deu certo " + content.titulo_nivel_1.value);
    return false;

}

function criarPagePronto(){
    const  content_quiz = document.querySelector(".content-quiz");

    content_quiz.innerHTML += `<div class="quiz-img">
                                 <img src="imgteste/one-punch-man.webp" alt="">
                                    <p>Acerte os personagens corretos do one punch man e prove seu amor!</p>
                                </div> 
                                <input class="button-quiz" type="submit" value="Acessar  Quizz">    

                                <div onclick="home()" class="button-volta">
                                    <span>Voltar pra home</span>
                                </div>
                                </div>`;
 
    return false;
}

function home(){
    location.assign("/index.html");
}

function form(content) {
    alert("deucerto " + content.titulo.value);
    return false;
}

//post.then(x => x.data)