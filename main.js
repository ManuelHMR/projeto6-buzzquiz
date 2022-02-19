const urlQuizz = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes'
let savedApiData
let id
let main

displayLoadPage()
setTimeout(loadHomePage, 1500)

function loadHomePage(){
    document.querySelector("main").innerHTML = `
    <div class="home-page">
            <div class="quizz-creation">
                <div class="quizz-box creation-box">
                    <h2>Você não criou nenhum quizz ainda :(</h2>
                    <button onclick="displayCreateQuizz()">Criar Quizz</button>
                </div>
            </div>
            <div class="allQuizzes">
                <span>Todos os Quizzes</span>
            </div>
            <div class="quizz-display"></div>
        </div>
    `
    getQuizz()
}

function getQuizz() {
    let quizzPromise = axios.get(urlQuizz)
    quizzPromise.then(displayQuizz)
}

function displayQuizz(quizzRepesponse) {
    let data = quizzRepesponse.data;
    savedApiData = data;
    console.log(data)
    for (let i = 0; i < quizzRepesponse.data.length; i++) {
        let quizzDisplay = document.querySelector('.quizz-display')
        quizzDisplay.innerHTML =
            quizzDisplay.innerHTML +
            `
      <div class="quizz-box" onclick="loadSelectedQuizz(this)">
        <img src="${data[i].image}"/>
        <h5>${data[i].title}</h5>
        <p class="id hidden">${i}</p> 
      </div>
    `
    }
    // for (let j = 0; j < quizzRepesponse.data.length; j++) {
    //      let quizzImg = document.querySelector("quizz-box");
    //     quizzImg.setAttribute("background-image:", "linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(0, 0, 0, 1)), url(`${data[j].image}`)");
    //  }
}

function displaySelectedQuizz() {
    hideHomePage()
    document.querySelector("main").innerHTML = `<div class="selected-quizz-header"><img class="selected-quizz-img" src="${savedApiData[id].image}"/>
    <h5>${savedApiData[id].title}</h5>
    </div>`
    displayQuizzQuestions()
}

function loadSelectedQuizz(e){
    displayLoadPage()
    id = e.querySelector("p").innerHTML
    setTimeout(displaySelectedQuizz, 1500)
}

function displayQuizzQuestions(){
    let questions = savedApiData[id].questions;
    main = document.querySelector("main");
    for(let i = 0 ; i < questions.length; i++){
        main.innerHTML = main.innerHTML + `
        <div class="question-box">
            <div style="background-color: ${questions[i].color};" class="question-box-header">
                <h2>${questions[i].title}</h2>
            </div>
        <div class="answer-box"></div>
        </div>
        `
        let answerArray = questions[i].answers.sort((a,b) => 0.5 - Math.random());
        for(let j = 0; j< questions[i].answers.length; j++){
            let questionBoxArray = document.querySelectorAll(".question-box");
            let answerBox = questionBoxArray[i].querySelector(".answer-box")
            answerBox.innerHTML = answerBox.innerHTML + `
            <div class="answer" onclick="verifyAnswer(this)">
                <img src="${answerArray[j].image}"/>
                <h3>${answerArray[j].text}</h3>
                <p class="hidden">${answerArray[j].isCorrectAnswer}</p>
            </answer>
            `
        }
    }
}

function verifyAnswer(e){
    e.classList.add("selected")
    let answersArr = e.parentNode.querySelectorAll(".answer")
    for (let l = 0; l < answersArr.length; l++) {
        answersArr[l].classList.add("opacity")
        if(answersArr[l].querySelector("p").innerHTML === 'true'){
            answersArr[l].querySelector("h3").classList.add("correct-style")
        } 
        if(answersArr[l].querySelector("p").innerHTML === 'false'){
            answersArr[l].querySelector("h3").classList.add("incorrect-style")
        }
    }
}

function hideHomePage() {
    document.querySelector('main').innerHTML = ``
}

function displayLoadPage(){
    document.querySelector('main').innerHTML = `
    <div class="loader"></div>
    <h2 class="loading">Carregando</h2>
    `
}

function displayCreateQuizz() {
    document.querySelector('main').innerHTML = ``
    document.querySelector('main').innerHTML = `
    <div class="create-quiz-start"></div>
    `
    console.log("Indo para criar quizz")
    renderingCreationGeneral()
}
