const urlQuizz = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes'
let savedApiData;
let id;
let main;
let selectedIndex = 1;
let correctAnswersCount = 0;
let resultF;

siteStart()

function siteStart(){
    displayLoadPage()
    setTimeout(loadHomePage, 1500)
    correctAnswersCount = 0;
    resultF = 0;
}

function loadHomePage(){
    document.querySelector("main").innerHTML = `
    <div class="home-page">
            <div class="quizz-creation">
                <div class="quizz-box creation-box">
                    <h2>Você não criou nenhum quizz ainda :(</h2>
                    <button onclick="displayCreateQuizz()" data-identifier="create-quizz">Criar Quizz</button>
                </div>
            </div>
            <div class="all-quizzes">
                <span>Todos os Quizzes</span>
            </div>
            <div class="quizz-display" data-identifier="general-quizzes"></div>
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
      <div class="quizz-box" onclick="loadSelectedQuizz(this)" data-identifier="quizz-card">
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

function loadSelectedQuizz(element){
    displayLoadPage()
    id = element.querySelector("p").innerHTML
    setTimeout(displaySelectedQuizz, 1500)
}

function displayQuizzQuestions(){
    let questions = savedApiData[id].questions;
    main = document.querySelector("main");
    for(let i = 0 ; i < questions.length; i++){
        main.innerHTML = main.innerHTML + `
        <div class="question-box" >
            <div style="background-color: ${questions[i].color};" class="question-box-header">
                <h2 data-identifier="question">${questions[i].title}</h2>
            </div>
        <div class="answer-box"></div>
        </div>
        `
        let answerArray = questions[i].answers.sort((a,b) => 0.5 - Math.random());
        for(let j = 0; j< questions[i].answers.length; j++){
            let questionBoxArray = document.querySelectorAll(".question-box");
            let answerBox = questionBoxArray[i].querySelector(".answer-box")
            answerBox.innerHTML = answerBox.innerHTML + `
            <div class="answer" onclick="verifyAnswer(this)" data-identifier="answer">
                <img src="${answerArray[j].image}"/>
                <h3>${answerArray[j].text}</h3>
                <p class="hidden">${answerArray[j].isCorrectAnswer}</p>
            </answer>
            `
        }
    }
}

function verifyAnswer(element){
    setTimeout(scrollQuestions, 2000)
    if(element.querySelector("p").innerHTML === 'true'){
        correctAnswersCount++
    }
    selectedIndex++
    element.classList.add("selected")
    let answersArr = element.parentNode.querySelectorAll(".answer")
    for (let l = 0; l < answersArr.length; l++) {
        answersArr[l].classList.add("opacity")
        answersArr[l].classList.add("disabled")
        if(answersArr[l].querySelector("p").innerHTML === 'true'){
            answersArr[l].querySelector("h3").classList.add("correct-style")
        } 
        if(answersArr[l].querySelector("p").innerHTML === 'false'){
            answersArr[l].querySelector("h3").classList.add("incorrect-style")
        }
    }
    if(document.querySelectorAll(".selected").length === document.querySelectorAll(".question-box").length){
        setTimeout (displayResult, 2000)
        setTimeout (scrollResult, 2050)
    }
}

function displayResult(){
    calculateResult()
    let reversedLevels = savedApiData[id].levels.reverse()
    let level
    let n
    for(n = 0; n < savedApiData[id].levels.length; n++){
        if (reversedLevels[n].minValue <= resultF){
            level = n;
            break
        } 
    }
    document.querySelector('main').innerHTML = document.querySelector('main').innerHTML + `
        <div class="result">
            <div class="result-box" data-identifier="quizz-result">
                <div class="result-header">
                    <h2> ${resultF}%  de acerto: ${reversedLevels[n].title}</h2>
                </div>
                <div class="result-body">    
                    <img src="${reversedLevels[n].image}"/>
                    <h3> ${reversedLevels[n].text}</h3>
                </div>    
            </div>
            <button class="result" onclick="reloadQuizz()"> Reiniciar Quizz</button>
            <h5 class="result" onclick="siteStart()">Voltar pra home</h5>
        </div>
        `
}

function calculateResult(){
    let numOfQuestions = document.querySelectorAll(".question-box").length;
    resultF = Math.round((correctAnswersCount / numOfQuestions) * 100);
}

function scrollQuestions(){
    let questionBoxArr = document.querySelectorAll(".question-box");
    questionBoxArr[selectedIndex].scrollIntoView();
}

function scrollResult(){
    let result = document.querySelector(".result");
    result.scrollIntoView()
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

function reloadQuizz(){
    hideHomePage()
    displaySelectedQuizz()
    let header = document.querySelector("header");
    header.scrollIntoView()
    correctAnswersCount = 0;
    resultF = 0;
}

function displayCreateQuizz() {
    document.querySelector('main').innerHTML = ``
    document.querySelector('main').innerHTML = `
    <div class="create-quiz-start"></div>
    `
    console.log("Indo para criar quizz")
    renderingCreationGeneral()
}


