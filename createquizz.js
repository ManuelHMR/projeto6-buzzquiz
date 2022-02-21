let regularExpressionUrl = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?|magnet:\?xt=urn:btih:/;
let regularExpressionColor = /^#[0-9A-F]{6}$/i;

let value1 = null;
let value2 = null;
let value3 = null;
let value4 = null;

let form = {
    title: null,
    image: null,
    questions: [],
    levels: [],
}


function renderingCreationGeneral() {
    let screenCreationOne = document.querySelector('.create-quiz-start');
    screenCreationOne.innerHTML = `
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

function generalFormData(event) {
    const titleQuizz = document.querySelector("#titleQuizz")
    const imgQuizz = document.querySelector("#imgQuizz")
    const amtQuestionQuizz = document.querySelector("#amtQuestionQuizz")
    const amtLevelsQuizz = document.querySelector("#amtLevelsQuizz")

    value1 = titleQuizz.value
    value2 = imgQuizz.value
    value3 = amtQuestionQuizz.value
    value4 = amtLevelsQuizz.value
    //validaçao
        if (!(value1.length <= 65 && value1.length >= 20)) {
            alert("O titulo tem que ter entre 20 e 65 caracteres");
        }
        if (!(regularExpressionUrl.test(value2))) {
            alert("Esta não é uma url valida");
        }
        if (value3 < 3) {
            alert("A quantidade de perguntas tem de ser ao menos 3");
        }
        if (value4 < 2) {
            alert("A quantidade de niveis tem de ser ao menos 2");
        }
        if ((regularExpressionUrl.test(value2)) && (value1.length >= 20 && value1.length <= 65) && (value3 >= 3) && (value4 >= 2)) {
            form.title = value1
            form.image = value2
            displayCreateQuestion()
        }
    
}


function displayCreateQuestion() {
    document.querySelector('main').innerHTML = ``
    document.querySelector('main').innerHTML = `
        <div class="create-quiz-questions"></div>
    `
    console.log("tela de criar questoes")

    renderingCreationQuestions()
}

function renderingCreationQuestions() {
    let screenCreationTwo = document.querySelector('.create-quiz-questions');
    screenCreationTwo.innerHTML = `
            <div class="create-quiz-head">
                <span>Crie suas perguntas</span>
            </div> `
    for (let i = 0; i < value3; i++) {
        screenCreationTwo.innerHTML += `
                <div class="create-quiz-form2 question-${i + 1}">
                <form>               
                    <label for="Pergunta ${i + 1}">Pergunta ${i + 1}</label>
                    <input type="text" id="titleQuestion${i + 1}" name="titleQuestion${i + 1}" placeholder="Texto da pergunta">
                    <input type="text" id="colorBack${i + 1}" name="colorBack${i + 1}" placeholder="Cor de fundo da pergunta">
                </form> 

                <form>
                    <label for="lname">Resposta correta</label>
                    <input type="text" id="answerOne${i + 1}" name="answerOne${i + 1}" placeholder="Resposta correta">
                    <input type="text" id="urlOne${i + 1}" name="urlOne${i + 1}" placeholder="URL da imagem">
                    <div class="division-20px"></div>

                    <label for="lname">Resposta incorretas</label>
                    <input type="text" id="answerTwo${i + 1}" name="answerTwo${i + 1}" placeholder="Resposta incorreta 1">
                    <input type="text" id="urlTwo${i + 1}" name="urlTwo${i + 1}" placeholder="URL da imagem 1">
                    <div class="division-20px"></div>

                    <input type="text" id="answerTree${i + 1}" name="answerTree${i + 1}" placeholder="Resposta incorreta 2">
                    <input type="text" id="urlTree${i + 1}" name="urlTree${i + 1}" placeholder="URL da imagem 2">
                    <div class="division-20px"></div>

                    <input type="text" id="answerFour${i + 1}" name="answerFour${i + 1}" placeholder="Resposta incorreta 3">
                    <input type="text" id="urlFour${i + 1}" name="urlFour${i + 1}" placeholder="URL da imagem 3">
                    <div class="division-20px"></div>
                </form>
            </div>
            `
    }
    screenCreationTwo.innerHTML += `
            <button class="next-form-button2" onmousedown="questionFormData(event)">Prosseguir pra criar níveis</button> 
            `
    // falta colocar as perguntas no formato diferente e linkar botoes e brincar com hidden
}

function questionFormData(event) {
    for (let i = 0; i < value3; i++) {
        let questionObjects = {
            title: '',
            color: '',
            answers: []
        };
        let answerObjects1 = {
            text: '',
            image: '',
            isCorrectAnswer: ''
        };

        let answerObjects2 = {
            text: '',
            image: '',
            isCorrectAnswer: ''
        };

        let answerObjects3 = {
            text: '',
            image: '',
            isCorrectAnswer: ''
        };

        let answerObjects4 = {
            text: '',
            image: '',
            isCorrectAnswer: ''
        };

        questionObjects.title = document.getElementById(`titleQuestion${i + 1}`).value;
        questionObjects.color = document.getElementById(`colorBack${i + 1}`).value;

        answerObjects1.text = document.getElementById(`answerOne${i + 1}`).value;
        answerObjects1.image = document.getElementById(`urlOne${i + 1}`).value;
        answerObjects1.isCorrectAnswer = true;
        questionObjects.answers.push(answerObjects1);

        answerObjects2.text = document.getElementById(`answerTwo${i + 1}`).value;
        answerObjects2.image = document.getElementById(`urlTwo${i + 1}`).value;
        answerObjects2.isCorrectAnswer = false;
        questionObjects.answers.push(answerObjects2);

        answerObjects3.text = document.getElementById(`answerTree${i + 1}`).value;
        answerObjects3.image = document.getElementById(`urlTree${i + 1}`).value;
        answerObjects3.isCorrectAnswer = false;
        questionObjects.answers.push(answerObjects3);

        answerObjects4.text = document.getElementById(`answerFour${i + 1}`).value;
        answerObjects4.image = document.getElementById(`urlFour${i + 1}`).value;
        answerObjects4.isCorrectAnswer = false;
        questionObjects.answers.push(answerObjects4);

        form.questions.push(questionObjects)
    }

    let counterQuestionItens = {
        length: 0,
        color: 0,
        answerAmount: 0,
        isAnswerEmpty: 0,
        isUrl: 0,
        isTrue: 0
    };

    //validar dados funciona
    form.questions.forEach((questions) => {
        let counter = 0;
        if (questions.title.length < 20 && counterQuestionItens.length === 0) {
            alert("O titulo deve ter pelo menos 20 caracteres");
            counterQuestionItens.length++;
            form.questions = [];
        }
        if (!regularExpressionColor.test(questions.color) && counterQuestionItens.color === 0) {
            alert("A cor de fundo deve ser passada em formato hexadecimal");
            counterQuestionItens.color++;
            form.questions = [];
        }
        if (questions.answers.length < 2 && counterQuestionItens.answerAmount === 0) {
            alert("As questões devem conter ao menos duas respostas");
            counterQuestionItens.answerAmount++;
            form.questions = [];
        }
        questions.answers.forEach((answer) => {
            if ((answer.text == "") && counterQuestionItens.isAnswerEmpty === 0) {
                alert("O texto das questões não podem estar vazios");
                counterQuestionItens.isAnswerEmpty++;
                form.questions = [];
            }
            if ((!(regularExpressionUrl.test(answer.image)) || answer.image == undefined) && counterQuestionItens.isUrl === 0) {
                alert("A imagem das respostas devem ter uma url valida");
                counterQuestionItens.isUrl++;
                form.questions = [];
            }
            if (answer.isCorrectAnswer === true) {
                counter++;
            }
        });
        if ((counter === 2) && counterQuestionItens.isTrue === 0) {
            alert("As questões devem conter ao menos uma respota correta");
            counterQuestionItens.isTrue++;
            form.questions = [];
        }
    });
    if (form.questions.length !== 0) {
        displayCreateLevels();
    }
    

}


function displayCreateLevels() {
    document.querySelector('main').innerHTML = ``
    document.querySelector('main').innerHTML = `
        <div class="create-quiz-levels"></div>
    `
    console.log("tela de criar leveis")

    renderingCreationLevels()
}

function renderingCreationLevels() {
    let screenCreationTree = document.querySelector('.create-quiz-levels');
    screenCreationTree.innerHTML = `
        <div class="create-quiz-head">
            <span>Agora, decida os níveis!</span>
        </div> `
    for (let i = 0; i < value4; i++) {
        screenCreationTree.innerHTML += `
            <div class="create-quiz-form3">
            <form>
                <label for="Nível ${i + 1}">Nível ${i + 1}</label>
                <input type="text" id="levelTitle${i + 1}" name="levelTitle${i + 1}" placeholder="Titulo do nivel">
                <input type="text" id="levelHit${i + 1}" name="levelHit${i + 1}" placeholder="% de acerto nivel">
                <input type="text" id="urlImgLvl${i + 1}" name="urlImgLvl${i + 1}" placeholder="URL da imagem do nível">
                <textarea id="description${i + 1}" name="description${i + 1}"  placeholder="Descrição do nível"></textarea>
            </form> 
            </div>
            `
    }
    screenCreationTree.innerHTML += `
        <button class="next-form-button3" onmousedown="levelsFormData(event)">Finalizar Quizz</button>
    `
}

function levelsFormData(event) {

    for (let i = 0; i < value4; i++) {
        let levelObjects = {
            title: null,
            image: null,
            text: null,
            minValue: null
        };

        levelObjects.title = document.getElementById(`levelTitle${i + 1}`).value;
        levelObjects.minValue = document.getElementById(`levelHit${i + 1}`).value;
        levelObjects.image = document.getElementById(`urlImgLvl${i + 1}`).value;
        levelObjects.text = document.getElementById(`description${i + 1}`).value;

        form.levels.push(levelObjects);
    }
    //validaçao
    for (let j = 0; j < value4; j++) {
        if (form.levels[j].title.length < 10) {
            alert("O titulo do nível deve ter pelo menos 10 caracteres");
        }
        if ((form.levels[j].minValue < 0) || (form.levels[j].minValue > 100) || (form.levels[j].minValue === '')) {
            alert("A porcentagem de acerto minima deve ser um número entre 0 e 100");
        }
        if (!(regularExpressionUrl.test(form.levels[j].image))) {
            alert("Esta não é uma url valida");
        }
        if (form.levels[j].text.length < 30) {
            alert("A descrição do nível deve ter pelo menos 30 caracteres");
        }
        if (!form.levels[j].minValue.includes(0)) {
            alert("Pelo menos um dos níveis deve conter uma % de acerto igual a 0")
        }
        if ((form.levels[j].title.length >= 10) && (!(form.levels[j].minValue < 0) || (form.levels[j].minValue > 100) || (form.levels[j].minValue === '')) && (regularExpressionUrl.test(form.levels[j].image) && (form.levels[j].text.length >= 30) && (form.levels[j].minValue.includes(0)))) {
            displayCreateFinish();;
        }
        form.levels = [];
    }
    
}


//essa funçao prepara o ambiente para dar o final
function displayCreateFinish() {
    console.log("tela de sucesso")
    document.querySelector('main').innerHTML = ``
    document.querySelector('main').innerHTML = `
        <div class="create-quiz-sucess"></div>
    `

    renderingCreationFinish()
}

function saveUserQuizz(form) {
	let promise = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", form)
		promise.then(response => {
			let userQuizzSerial = JSON.stringify(form)
			localStorage.setItem(response.data.id.toString(), userQuizzSerial)
			let secretKey = "k" + response.data.id.toString()
			localStorage.setItem(secretKey, response.data.key.toString()) 
		});
        promise.catch(erro => {
            console.log(erro)
        });
}

function renderingCreationFinish() {
    saveUserQuizz(form);

    let screenCreationFour = document.querySelector('.create-quiz-sucess');
    screenCreationFour.innerHTML = `
        <div class="create-quiz-head">
            <span>Agora, Seu quizz está pronto</span>
        </div>
        <div class="new-quizz"></div>
        <button class="next-form-button4" onclick="displayQuizzCreated()">Acessar Quizz</button>
        <button class="next-form-button5" onclick="displayHomePage()">Voltar pra home</button>
    `
    const newQuizz = document.querySelector(".new-quizz");
    newQuizz.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${form.image})`;
    newQuizz.innerHTML += `<p>${form.title}</p>`;
}

function displayHomePage() {
    console.log("Mudando para a tela inicial")
    document.querySelector('main').innerHTML = ``
    document.querySelector('main').innerHTML = `
        <div class="create-quiz-levels"></div>
    `
    loadHomePage()
}

//essa function tem q ir para a pagina do quizz criado utilizando seu id arrumar
function displayQuizzCreated() {
    console.log("Mudando para a tela do quizz criado")

    document.querySelector('main').innerHTML = ``
    document.querySelector('main').innerHTML = `
        <div class="create-quiz-levels"></div>
    `
    renderingCreationGeneral()//mudar para a q renderiza a tela do quizz especifico
}