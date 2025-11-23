const questionEl = document.getElementById('question');
const labels = [
  document.getElementById('label1'),
  document.getElementById('label2'),
  document.getElementById('label3'),
  document.getElementById('label4')
];
const radios = [
  document.getElementById('answer1'),
  document.getElementById('answer2'),
  document.getElementById('answer3'),
  document.getElementById('answer4')
];
const nextBtn = document.getElementById('next');

// Array of questions and answers
const quiz = [
  {
    question: "What is the largest desert in the world?",
    answers: ["Sahara", "Gobi", "Kalahari", "Patagonian"],
    correct: "Sahara"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: "Mars"
  },
  {
    question: "What is the fastest land animal?",
    answers: ["Cheetah", "Lion", "Tiger", "Leopard"],
    correct: "Cheetah"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correct: "William Shakespeare"
  },
  {
    question: "What is the smallest prime number?",
    answers: ["0", "1", "2", "3"],
    correct: "2"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Gold", "Oxygen", "Osmium", "Zinc"],
    correct: "Oxygen"
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correct: "Tokyo"
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: "Pacific"   
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correct: "Leonardo da Vinci"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Silver",],
    correct: "Diamond"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "Thailand", "India"],
    correct: "Japan"
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: ["Tomato", "Avocado",  "Onion", "Pepper"],
    correct: "Avocado"
  }, 
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: "Carbon Dioxide"
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct: "Blue Whale"
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: ["90°C", "100°C", "110°C", "120°C"],
    correct: "100°C"
  }
];

let index = 0;
let score = 0;

//Select the HTML elements - Kamila
const questionContainer = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const scoreContainer = document.querySelector("score");

// Function to reset radio buttons before loading next question
const radios2=document.querySelectorAll('input[name="q1"]');
function resetRadios() {
    radios2.forEach(radio => radio.checked = false);
}

// Function to load a question 
function loadQuestion(i) {
  questionEl.textContent = quiz[i].question;
  for (let j = 0; j < 4; j++) {
    labels[j].textContent = quiz[i].answers[j];
  }
  resetRadios();
}

// Initial load
loadQuestion(index);

// Next button click
nextBtn.addEventListener('click', () => {
  checkAnswer(); //check before moving on
  index++;
  if (index >= quiz.length) 
  {
    localStorage.setItem("quizScore", score); //save score so it can be displayed later
    window.location.href="score.html"; // goes to the score page after the last question
  } else {
  loadQuestion(index);
  }
});

//Check answers - Kamila
function checkAnswer(){
  const radios2 = document.querySelectorAll("input[name=q1]"); //get all radio buttons
  let selected = null;
  radios2.forEach((radio, i) => { //check every radio button
    if (radio.checked) {
      selected = radio.value;
    }
  });
  if (selected === quiz[index].correct) {
  score++;
  }
}
