const urlQuizz = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
getQuizz()
function getQuizz(){
  let quizzPromise = axios.get(urlQuizz)
  quizzPromise.then(quizzPromiseRepesponse)
} 
function quizzPromiseRepesponse(quizzRepesponse){
  console.log(quizzRepesponse.data)
}