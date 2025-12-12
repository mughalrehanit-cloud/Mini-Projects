const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Tech Modern Language", correct: false },
            { text: "Home Tool Markup List", correct: false },
            { text: "Hyperlinks Text Model Language", correct: false }
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "CSS", correct: true },
            { text: "HTML", correct: false },
            { text: "Python", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "JavaScript works in the:",
        answers: [
            { text: "Browser", correct: true },
            { text: "Terminal", correct: false },
            { text: "CPU directly", correct: false },
            { text: "Database", correct: false }
        ]
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");

function loadQuestion() {
    nextBtn.style.display = "none";
    answersEl.innerHTML = "";

    let currentQuestion = questions[currentIndex];
    questionEl.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(ans => {
        let btn = document.createElement("button");
        btn.textContent = ans.text;

        btn.onclick = () => selectAnswer(btn, ans.correct);

        answersEl.appendChild(btn);
    });
}

function selectAnswer(button, isCorrect) {
    const buttons = answersEl.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true); // prevent multiple choices

    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    scoreText.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;

    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");

    loadQuestion();
}

loadQuestion();
