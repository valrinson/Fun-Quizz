const questions = [

{
question: "What does HTML stand for?",
options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Markup Language", "Hyper Tool Machine Language"],
answer: 0
},

{
question: "Which language is used for styling web pages?",
options: ["HTML", "CSS", "Python", "Java"],
answer: 1
},

{
question: "Which language adds interactivity to websites?",
options: ["JavaScript", "C++", "SQL", "Python"],
answer: 0
},

{
question: "Which company developed JavaScript?",
options: ["Microsoft", "Apple", "Netscape", "Google"],
answer: 2
},

{
question: "What does CSS stand for?",
options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
answer: 1
},

{
question: "Which HTML tag creates a hyperlink?",
options: ["link", "a", "href", "url"],
answer: 1
},

{
question: "Which HTML tag is used for images?",
options: ["image", "img", "picture", "src"],
answer: 1
},

{
question: "Which CSS property changes text color?",
options: ["font-color", "text-color", "color", "background"],
answer: 2
},

{
question: "Which CSS property changes background color?",
options: ["bgcolor", "background-color", "color", "background-image"],
answer: 1
},

{
question: "Which symbol is used for IDs in CSS?",
options: [".", "#", "*", "&"],
answer: 1
},

{
question: "Which symbol is used for Classes in CSS?",
options: [".", "#", "$", "&"],
answer: 0
},

{
question: "Which method writes output to the browser console?",
options: ["console.write()", "console.log()", "print()", "document.log()"],
answer: 1
},

{
question: "Which keyword declares a variable in JavaScript?",
options: ["var", "let", "const", "All of the above"],
answer: 3
},

{
question: "Which operator is used for strict equality?",
options: ["=", "==", "===", "!="],
answer: 2
},

{
question: "How do you write a comment in JavaScript?",
options: ["<!-- -->", "//", "**", "##"],
answer: 1
},

{
question: "What does SQL stand for?",
options: ["Structured Query Language", "Simple Query Language", "System Query Language", "Server Query Language"],
answer: 0
},

{
question: "Which SQL command retrieves data?",
options: ["GET", "SELECT", "SHOW", "RETRIEVE"],
answer: 1
},

{
question: "Which SQL command inserts data?",
options: ["ADD", "INSERT", "PUT", "CREATE"],
answer: 1
},

{
question: "Which SQL command deletes data?",
options: ["REMOVE", "DROP", "DELETE", "CLEAR"],
answer: 2
},

{
question: "Which tag creates a numbered list?",
options: ["ul", "li", "ol", "list"],
answer: 2
},

{
question: "Which HTML tag creates a table row?",
options: ["td", "table", "tr", "th"],
answer: 2
},

{
question: "What does API stand for?",
options: ["Application Programming Interface", "Advanced Programming Interface", "Application Program Internet", "Automated Program Integration"],
answer: 0
},

{
question: "Which protocol is used to load web pages?",
options: ["FTP", "SMTP", "HTTP", "SSH"],
answer: 2
},

{
question: "Which company created React?",
options: ["Google", "Facebook", "Microsoft", "Amazon"],
answer: 1
},

{
question: "Which of the following is a JavaScript framework/library?",
options: ["React", "MySQL", "Photoshop", "Bootstrap Studio"],
answer: 0
}

];

let currentQuestion = 0;
let score = 0; 

let timer;
let timeLeft = 7; // 7 seconds per question

document
.getElementById("startBtn")
.addEventListener("click", startQuiz);

document
    .getElementById("skipBtn")
    .addEventListener("click", skipQuestion);

function startQuiz() {

    document.getElementById("startScreen").style.display = "none";

    document.getElementById("quizScreen").style.display = "block";

    loadQuestion();
}

function startTimer() {

    clearInterval(timer);

    timeLeft = 7;

    document.getElementById("timer").innerText =
        `⏰ ${timeLeft}s`;

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerText =
            `⏰ ${timeLeft}s`;

        if (timeLeft <= 0) {

            clearInterval(timer);

            currentQuestion++;

            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                finishQuiz();
            }
        }

    }, 1000);
}

function loadQuestion() {

    startTimer();

    document.getElementById("question").innerHTML =
    `<h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
     <p>${questions[currentQuestion].question}</p>`;

    const optionsDiv =
    document.getElementById("options");

    optionsDiv.innerHTML = "";

    questions[currentQuestion].options.forEach(
    (option, index) => {

        const button =
        document.createElement("button");

        button.innerText = option;

        button.style.display = "block";
        button.style.width = "100%";
        button.style.margin = "10px 0";
        button.style.padding = "12px";
        button.style.cursor = "pointer";

        button.onclick = () =>
        checkAnswer(index);

        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selected) {

    const buttons =
    document.querySelectorAll("#options button");

    buttons.forEach(
    btn => btn.disabled = true
    );

    if (
        selected ===
        questions[currentQuestion].answer
    ) {

        buttons[selected]
        .style.background = "green";

        score++;

    } else {

        buttons[selected]
        .style.background = "red";

        buttons[
        questions[currentQuestion].answer
        ].style.background = "green";
    }

    setTimeout(() => {

        currentQuestion++;

        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        } else {

            localStorage.setItem(
                "score",
                score
            );

            localStorage.setItem(
                "totalQuestions",
                questions.length
            );

            window.location.href =
            "result.html";
        }

    }, 1000);
}

function finishQuiz() {

    localStorage.setItem("score", score);
    localStorage.setItem("totalQuestions", questions.length);

    const username =
        localStorage.getItem("loggedInUser") || "Guest";

    let leaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({
        name: username,
        score: score
    });

    leaderboard.sort((a, b) => b.score - a.score);

    localStorage.setItem(
        "leaderboard",
        JSON.stringify(leaderboard)
    );

    window.location.href = "result.html";
}
document
.getElementById("skipBtn")
.addEventListener("click", skipQuestion);

function finishQuiz() {

    localStorage.setItem(
        "score",
        score
    );

    localStorage.setItem(
        "totalQuestions",
        questions.length
    );

    window.location.href =
    "result.html";
}

document
.getElementById("skipBtn")
.addEventListener(
    "click",
    skipQuestion
);

function skipQuestion() {

    currentQuestion++;

    if (
        currentQuestion <
        questions.length
    ) {

        loadQuestion();

    } else {

        finishQuiz();

    }
}

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("loggedInUser");

        window.location.href = "index.html";

    });
}