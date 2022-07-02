let quizz;
let idQuizz;
let perguntas;

let caixaQuestion;
let allQuizz = document.querySelector('.quizz-publico')
let perguntasHidden = document.querySelector('.perguntas')
let caixaUsuario = document.querySelector('.caixa-usuario')
let todosQuizz = document.querySelector('.todos-quizz')
let quizzPublico = document.querySelector('.quizz-publico')
   
let questions;
let answers;
let arrayPerguntas = []


function buscarQuizz() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes')

    promise.then(rendereizarQuizz)
}
buscarQuizz()

function rendereizarQuizz(resposta) {
    quizz = resposta.data
    allQuizz.innerHTML = ''

    
    
    for (let i = 0; i < quizz.length; i++) {

        allQuizz.innerHTML += `
        <li onclick="perguntaQuizz(this)">
            <img src="${quizz[i].image}" alt="">
            <p>${quizz[i].title}</p>
            <span>${quizz[i].id}</span>
        </li>
        `
    }

}

function criarQuizz() {
    /* aqui vai a função que cria o quizz do usuario */
    alert('função em criação')
    
}

function perguntaQuizz(elemento) {
    idQuizz = elemento.querySelector('span').innerHTML
    caixaUsuario.innerHTML = '' 
    todosQuizz.innerHTML = ''
    quizzPublico.innerHTML = ''

    buscarPerguntas()
}

function buscarPerguntas() {
    let promise = axios.get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${idQuizz}`)

    promise.then(renderizarPerguntas)
}

function renderizarPerguntas(resposta) {
    perguntasHidden.classList.remove('escondido')
    perguntas = resposta.data
    questions = perguntas.questions
      
    perguntasHidden.innerHTML += `
            <div class="topo-perguntas">
                <img src="${perguntas.image}" alt="">
                <h2>${perguntas.title}</h2>
            </div>
        `
        
        for(let i = 0; i < perguntas.questions.length; i++ ) {
            
            perguntasHidden.innerHTML += `
                <ul class="caixa-perguntas">
            
                    <div class="question">
                        <div class="topo-question">
                            <h3>${questions[i].title}</h3>
                        </div>                      
                        
                        <div class="img-question">

                        </div>
                    </div>
                
                </ul> 
                `
            
            for(let c = 0; c < questions[i].answers.length; c++) {

                    caixaQuestion = document.querySelectorAll('.img-question')[i]
                    
                    caixaQuestion.innerHTML += `
                        
                            <div class="img">
                                <img src="${questions[i].answers[c].image}" alt="">
                                <p>${questions[i].answers[c].text}</p>
                            </div>    
                    
                        
                    `
            }
        
                
        }

}



/* <div class="res-question">
                        <div class="topo-res-question">
                            <h3>90% de acerto: Você é praticamente um alien</h3>
                        </div>

                    
                        <div class="img-res-question">
                            <div class="img">
                                <img src="imgteste/Grey_Aliens.webp" alt="">                            
                            </div>

                            <div class="txt-final">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate quae, aliquid voluptatibus eum quas modi repellendus omnis, recusandae perspiciatis iusto! Cum, architecto sunt! Magni incidunt deserunt porro tempora architecto?
                                </p>
                            </div>
                        </div>                    
                    </div>
            
                    <div class="reiniciar-voltar">
                        <div class="reiniciar">
                            <p>Reiniciar Quizz</p>
                        </div>

                        <div class="voltar">
                            <p>Voltar para home</p>
                        </div>
                    </div>
                 */


                    /* <div class="img">
                            <img src="${questions[i].answers[1].image}" alt="">
                            <p>${questions[i].answers[1].text}</p>
                        </div>

                        <div class="img">
                            <img src="${questions[i].answers[2].image}" alt="">
                            <p>${questions[i].answers[2].text}</p>
                        </div>

                        <div class="img">
                            <img src="${questions[i].answers[3].image}" alt="">
                            <p>${questions[i].answers[3].text}</p>
                        </div> */