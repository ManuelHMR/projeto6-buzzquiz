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


function displayCreateQuizz() {
    displayScreen3()
    console.log("tela de criar quizz")
}

function displayScreen2() {
    hideScreen1()
}

function hideScreen1() {
    document.querySelector('header').classList.add('hidden')
    document.querySelector('main').classList.add('hidden')
}

function displayScreen3() {
    hideScreen1()
}