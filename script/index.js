let quizz;

const allQuizz = document.querySelector('.quizz-publico')


function buscarQuizz() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes')

    promise.then(rendereizarQuizz)
}
buscarQuizz()

function rendereizarQuizz(resposta) {
    quizz = resposta.data
    console.log(quizz)
    allQuizz.innerHTML = ''

    
    
    for (let i = 0; i < quizz.length; i++) {

        allQuizz.innerHTML += `
        <li onclick="perguntasQuizz()">
            <img src="${quizz[i].image}" alt="">
            <p>${quizz[i].title}</p>
        </li>
        `
    }
}

function criarQuizz() {
    /* aqui vai a função que cria o quizz do usuario */
    alert('função em criação')
    
}

function perguntaQuizz() {

}



