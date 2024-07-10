//Hiding and hover Rules

const how = document.querySelector('.how');
const rules = document.querySelector('.rules');

how.addEventListener('mouseover', () => {
  rules.style.display = 'block';
});

how.addEventListener('mouseout', () => {
  rules.style.display = 'none';
});

// clicking on start Button

const start = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const quizContainer = document.querySelector('.quiz-container');

start.addEventListener('click', () => {
  container.style.display = 'none';
  quizContainer.style.display = 'flex';
  displayQuestion();
})

// questions saved in array

const questions = [
  {
    questionNo : "Question 1",
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris"
  },
  {
    questionNo : "Question 2",
    questionText: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript"
  },
  {
    questionNo : "Question 3",
    questionText : "France won last world in which year?",
    options : ["1999","2018","2022","2014"],
    correctAnswer : "2018"
  },
  {
    questionNo : "Question 4",
    questionText : "How many trophies does messi has?",
    options : ["10","20","30","37"],
    correctAnswer : "37"
  },
  {
    questionNo : "Question 5",
    questionText : "In which year Maradona retired from international football?",
    options : ["1933","2010","2019","1992"],
    correctAnswer : "1992"
  },
  {
    questionNo : "Question 6",
    questionText : "Who is the Greatest of All Time?",
    options : ["Maradona","Pele","Ronaldinho","Messi"],
    correctAnswer : "Messi"
  },
  {
    questionNo : "Question 7",
    questionText : "Who has the most Goals and Assist for a single Club?",
    options : ["Messi","Modric","Kroos","Ronaldo"],
    correctAnswer : "2018"
  },
];

// displaying question 


// <div class="quiz-container" style="display: none;">
//     <div class="question-detail">
//       <p class="question-num">Question 1</p>
//       <p class="question">What is the Capital of India and whatver it is?</p>
//     </div>
//     <div class="Answers">
//       <button class="options">Delhi</button>
//       <button class="options">Mumbai</button>
//       <button class="options">Hyderbad</button>
//       <button class="options">India</button>
//     </div>
//   </div>

let currentIndex = 0 ;

const displayQuestionNumber = document.querySelector('.question-num');
const questionNumber = questions[currentIndex];

// displayQuestion() {

// }





