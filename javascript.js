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
    answers: ["Sahara", "Gobi", "Kalahari", "Patagonian"]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"]
  },
  {
    question: "What is the fastest land animal?",
    answers: ["Cheetah", "Lion", "Tiger", "Leopard"]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"]
  },
  {
    question: "What is the smallest prime number?",
    answers: ["0", "1", "2", "3"]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Gold", "Oxygen", "Osmium", "Zinc"]
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Seoul", "Beijing", "Tokyo", "Bangkok"]
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic", "Indian", "Arctic", "Pacific"]   
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Gold", "Iron", "Diamond", "Silver"]
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "Thailand", "India"]
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: ["Tomato", "Avocado", "Onion", "Pepper"]
  }, 
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"]
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"]
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: ["90°C", "100°C", "110°C", "120°C"]
  }
];

let index = 0;
// Function to reset radio buttons
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
  index++;
  if (index >= quiz.length) 
    window.location.href="score.html"; // goes to the score page after the last question
    else
  loadQuestion(index);
});

//Results
function showResults(questions, quiz, resultsContainer){
    var answerContainer = quiz.querySelectorAll('.answers');
    var userAnswer = "";
    var numCorrect = 0;

    if(userAnswer === questions[i].correctAnswer){
        numCorrect++;
        answerContainer[i].style.color = 'light green';
    } else {
        answerContainer[i].style.color = 'red';
    }

    resultsContainer.innerHTML = numCorrect + '/' + questions.length;
}
