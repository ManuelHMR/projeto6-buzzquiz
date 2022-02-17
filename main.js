const urlQuizz = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes'
let savedApiData
let selectedQuizzPage = document.querySelector(".selected-quizz-page");
let id

getQuizz()

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

function displaySelectedQuizz(e) {
    hideHomePage()
    id = e.querySelector("p").innerHTML
    let main = document.querySelector("main")
    main.innerHTML = `<img src="${savedApiData[id].image}"/>`
    displayQuizzQuestions()
}
function loadSelectedQuizz(){
    displayLoadPage()
    setTimeout(displaySelectedQuizz, 1500)
}
function displayQuizzQuestions(){
    let questions = savedApiData[id].questions
    console.log(questions)
    for(let i = 0 ; i < questions.length; i++){
        selectedQuizzPage.innerHTML = selectedQuizzPage.innerHTML + `
        <section class=""
        <p>${questions[i].title}</p>
        `
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
    displayScreen3()
    console.log("tela de criar quizz")
}

function displayScreen3() {
    document.querySelector('.home-page').classList.add('hidden');
    document.querySelector('.quizz-display').classList.add('hidden');
    document.querySelector('.quizz-creation').classList.add('hidden');
    document.querySelector('.creation-box').classList.add('hidden');
    document.querySelector('.quizz-box').classList.add('hidden');
    document.querySelector('.allQuizzes').classList.add('hidden');
    console.log("tela inicial sumiu")
    document.querySelector('.create-quiz-start').classList.remove('hidden');
    document.querySelector('.create-quiz-head').classList.remove('hidden');
    document.querySelector('.create-quiz-form1').classList.remove('hidden');
    document.querySelector('.next-form-button').classList.remove('hidden');
    console.log("carregou tela 3")
}