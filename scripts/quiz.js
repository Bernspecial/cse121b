let quizData = []

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("quiz").innerHTML = `
        <p class="question">${currentQuestion.question}</p>
        <div class="choices">
            ${currentQuestion.choices.map((choice, index) => `
                <button onclick="checkAnswer(${index})">${choice}</button>
            `).join("")}
        </div>
    `;
}

const getQuiz = async () =>{
    const response = await fetch("https://bernspecial.github.io/cse121b/quiz.json");
    if (response.ok)
    {
        const url = await response.json();
        quizData = url;
        displayQuestion();
    }
    else {
        console.log(`HTTP error! status${response.status}`)
    }
}

getQuiz().then(() => {
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    }
});

function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        displayResults();
    }
}

function displayResults() {
    document.getElementById("results").innerHTML = `
        <h2>Quiz Results</h2>
        <p>You scored ${score} out of ${quizData.length}.</p>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}

getQuiz();