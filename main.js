const urlQuizz = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
getQuizz()
function getQuizz(){
  let quizzPromise = axios.get(urlQuizz)
  quizzPromise.then(displayQuizz)
} 
function displayQuizz(quizzRepesponse){
  let data = quizzRepesponse.data
  console.log(data)
  for(let i = 0; i < quizzRepesponse.data.length; i++){
    let quizzDisplay = document.querySelector(".quizz-display")
    quizzDisplay.innerHTML = quizzDisplay.innerHTML + `
      <div class="quizz-box">
        <img src="${data[i].image}"/>
        <h5>${data[i].title}</h5>
      </div>
    `
  }
}