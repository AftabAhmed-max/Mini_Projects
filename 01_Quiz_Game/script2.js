const questions = [
  {
      questionText: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris"
  },
  {
      questionText: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correctAnswer: "JavaScript"
  },
  {
    questionText : "France won last world in which year?",
    options : ["1999","2018","2022","2014"],
    correctAnswer : "2018"
  },
  {
    questionText : "How many trophies does messi has?",
    options : ["10","20","30","37"],
    correctAnswer : "37"
  },
  {
    questionText : "In which year Maradona retired from international football?",
    options : ["1933","2010","2019","1992"],
    correctAnswer : "1992"
  },
  {
    questionText : "Who is the Greatest of All Time?",
    options : ["Maradona","Pele","Ronaldinho","Messi"],
    correctAnswer : "Messi"
  },
  {
    questionText : "Who has the most Goals and Assist for a single Club?",
    options : ["Messi","Modric","Kroos","Ronaldo"],
    correctAnswer : "2018"
  },
];

let currentIndex = 0;
let score = 0;

const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEls = [
  document.getElementById('option1'),
  document.getElementById('option2'),
  document.getElementById('option3'),
  document.getElementById('option4')
];
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
  startBtn.style.display = 'none';
  quizContainer.style.display = 'flex';
  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = questions[currentIndex];
  questionEl.textContent = currentQuestion.questionText;
  optionsEls.forEach((optionEl, index) => {
      optionEl.textContent = currentQuestion.options[index];
      optionEl.onclick = () => selectAnswer(optionEl.textContent);
  });
}

function selectAnswer(selectedAnswer) {
  const currentQuestion = questions[currentIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
  }
  nextBtn.style.display = 'block';
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
      displayQuestion();
      nextBtn.style.display = 'none';
  } else {
      endQuiz();
  }
}

function endQuiz() {
  quizContainer.style.display = 'none';
  resultsContainer.style.display = 'flex';
  scoreEl.textContent = score;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  resultsContainer.style.display = 'none';
  startBtn.style.display = 'block';
}
