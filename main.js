const urlQuizz = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes'
getQuizz()

function getQuizz() {
    let quizzPromise = axios.get(urlQuizz)
    quizzPromise.then(displayQuizz)
}

function displayQuizz(quizzRepesponse) {
    let data = quizzRepesponse.data
    console.log(data)
    for (let i = 0; i < quizzRepesponse.data.length; i++) {
        let quizzDisplay = document.querySelector('.quizz-display')
        quizzDisplay.innerHTML =
            quizzDisplay.innerHTML +
            `
      <div class="quizz-box" onclick="displayScreen2(this)">
        <img src="${data[i].image}"/>
        <h5>${data[i].title}</h5>
      </div>
    `
    }
    // for (let j = 0; j < quizzRepesponse.data.length; j++) {
    //      let quizzImg = document.querySelector("quizz-box");
    //     quizzImg.setAttribute("background-image:", "linear-gradient(to bottom, rgba(255, 0, 0, 0), rgba(0, 0, 0, 1)), url(`${data[j].image}`)");
    //  }

}



function displayScreen2() {
    hideScreen1()
}

function hideScreen1() {
    document.querySelector('header').classList.add('hidden')
    document.querySelector('.home-page').classList.add('hidden')
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