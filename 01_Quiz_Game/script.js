const questions = [
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

const titleOne = document.querySelector('title').innerHTML = "Question 1";
const headingOne = document.querySelector('.heading').innerHTML = "Question 1";
const questionOne =  document.querySelector('.ques').innerHTML = questions[0].questionText ;
const optionOne = [document.querySelector('#option1').textContent = questions[0].options[0] ,
                    document.querySelector('#option2').textContent = questions[0].options[1] ,
                    document.querySelector('#option3').textContent = questions[0].options[2] ,
                    document.querySelector('#option4').textContent = questions[0].options[3]];
 

// function displayQuestion() {
//   const currentQuestion = 
// }

displayQuestion();

const nextBtn = document.querySelector('.nextques') ;

const submit = document.querySelector('.sub');
submit.addEventListener('click', function() {
  nextBtn.style.display = 'block';
});

let currentIndex = 0;
let score = 0;
