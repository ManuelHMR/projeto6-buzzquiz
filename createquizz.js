/*
render()
function render() {
    renderingCreationGeneral()
}
*/
function renderingCreationGeneral() {
    let screenCreationOne = document.querySelector('.create-quiz-start');
    screenCreationOne.innerHTML=`
            <div class="create-quiz-head">
                <span>Comece pelo começo</span>
            </div>
            <div class="create-quiz-form1">
                <form>
                    <input type="text" id="titleQuizz" name="titleQuizz" placeholder="Título do seu quizz">
                    <input type="text" id="imgQuizz" name="imgQuizz" placeholder="URL da imagem do seu quizz">
                    <input type="text" id="amtQuestionQuizz" name="amtQuestionQuizz" placeholder="Quantidade de perguntas do quizz">
                    <input type="text" id="amtLevelsQuizz" name="amtLevelsQuizz" placeholder="Quantidade de níveis do quizz">
                </form>
            </div>
            <button class="next-form-button" onmousedown="generalFormData(event)">Prosseguir pra criar perguntas</button> 
    `
}

//essa function funciona no click e joga os valores dos input pras variaveis
function generalFormData(event) {
    const titleQuizz = document.querySelector("#titleQuizz")
    const imgQuizz = document.querySelector("#imgQuizz")
    const amtQuestionQuizz = document.querySelector("#amtQuestionQuizz")
    const amtLevelsQuizz = document.querySelector("#amtLevelsQuizz")

    const value = titleQuizz.value
    const value2 = imgQuizz.value
    const value3 = amtQuestionQuizz.value
    const value4 = amtLevelsQuizz.value

    alert(`inputs` + value +`inputs`+ value2+ `inputs` + value3+ `inputs` + value4)

    displayCreateQuestion()
    //criar um if, se tudo for validado, da display, caso nao valide, recarrega adicionando a classe errado
    //salva os valores e bota cria uma funçao q adiciona a quantidade de perguntas e niveis
}

function displayCreateQuestion() {
    console.log("tela de criar questoes")
    document.querySelector('.next-form-button').classList.add('hidden');
    document.querySelector('.create-quiz-form1').classList.add('hidden');
    document.querySelector('.create-quiz-head span').classList.add('hidden');
    document.querySelector('.create-quiz-head').classList.add('hidden');
    document.querySelector('.create-quiz-start').classList.add('hidden');
    
    renderingCreationQuestions()
}

function renderingCreationQuestions() {
    let screenCreationTwo = document.querySelector('.create-quiz-questions');
    screenCreationTwo.innerHTML = `
            <div class="create-quiz-form2">
                <form>               
                    <label for="fname">Pergunta 1</label>
                    <input type="text" id="titleQuestion" name="titleQuestion" placeholder="Texto da pergunta">
                    <input type="text" id="colorBack" name="colorBack" placeholder="Cor de fundo da pergunta">
                </form>

                <form>
                    <label for="lname">Resposta correta</label>
                    <input type="text" id="answer" name="answer" placeholder="Resposta correta">
                    <input type="text" id="urlCorrect" name="urlCorrect" placeholder="URL da imagem">
                </form>

                <form>
                    <label for="lname">Resposta incorretas</label>
                    <input type="text" id="lname" name="lastname" placeholder="Resposta incorreta 1">
                    <input type="text" id="urlOne" name="urlOne" placeholder="URL da imagem 1">
                    <div class="division-20px"></div>
                    <input type="text" id="lname" name="lastname" placeholder="Resposta incorreta 2">
                    <input type="text" id="urlTwo" name="urlTwo" placeholder="URL da imagem 2">
                    <div class="division-20px"></div>
                    <input type="text" id="lname" name="lastname" placeholder="Resposta incorreta 3">
                    <input type="text" id="urlTree" name="urlTree" placeholder="URL da imagem 3">
                    <div class="division-20px"></div>
                </form>
            </div>
            <button class="next-form-button2" onclick="displayCreateLevels()">Prosseguir pra criar níveis</button> 
    `
    // falta colocar as outras perguntas no formato diferente e linkar botoes e brincar com hidden
    // dentro do ultimo form ele tem q ser dinamico para permitir de 1 a 3 respostas erradas
}

function displayCreateLevels() {
    console.log("tela de criar leveis")
    document.querySelector('.next-form-button2').classList.add('hidden');
    document.querySelector('.create-quiz-form2').classList.add('hidden');
    document.querySelector('.create-quiz-head span').classList.add('hidden');
    document.querySelector('.create-quiz-head').classList.add('hidden');
    document.querySelector('.create-quiz-start').classList.add('hidden');
    
    renderingCreationLevels()
}

function renderingCreationLevels() {
    let screenCreationTree = document.querySelector('.create-quiz-levels');
    screenCreationTree.innerHTML = `
        <div class="create-quiz-form3">
            <form>
                <label for="Nível 1">Nível 1</label>
                <input type="text" id="levelTitleOne" name="levelTitleOne" placeholder="Titulo do nivel">
                <input type="text" id="levelhitOne" name="levelhitOne" placeholder="% de acerto nivel">
                <input type="text" id="urlImgLvlOne" name="urlImgLvlOne" placeholder="URL da imagem do nível">
                <textarea id="descriptionOne" name="descriptionOne"  placeholder="Descrição do nível"></textarea>
            </form> 
        </div>
        <button class="next-form-button3" onclick="displayCreateFinish()">Finalizar Quizz</button>
    `
}
//essa funçao prepara o ambiente para dar 
function displayCreateFinish() {
    console.log("tela de sucesso")
    document.querySelector('.next-form-button3').classList.add('hidden');
    document.querySelector('.create-quiz-form3').classList.add('hidden');
    document.querySelector('.create-quiz-head span').classList.add('hidden');
    document.querySelector('.create-quiz-head').classList.add('hidden');
    document.querySelector('.create-quiz-start').classList.add('hidden');

    renderingCreationFinish()
}

function renderingCreationFinish() {
    let screenCreationFour = document.querySelector('.create-quiz-sucess');
    screenCreationFour.innerHTML = `
        <button class="next-form-button4" onclick="displayQuizzCreated()">Acessar Quizz</button>
        <button class="next-form-button5" onclick="displayHomePage()">Voltar pra home</button>
    `
}

function displayQuizzCreated() {
    console.log("Mudando para a tela do quizz criado")
    document.querySelector('.next-form-button4').classList.add('hidden');
    document.querySelector('.next-form-button5').classList.add('hidden');

    renderingCreationGeneral()//mudar para a q renderiza a tela do quizz especifico
}

function displayHomePage() {
    console.log("Mudando para a tela inicial")
    document.querySelector('.next-form-button4').classList.add('hidden');
    document.querySelector('.next-form-button5').classList.add('hidden');

    renderingCreationGeneral()//mudar para a q renderiza a tela home page
}