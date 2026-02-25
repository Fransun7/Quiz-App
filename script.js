document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");
  const prevNextContainer = document.getElementById("prev-next-container");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const scoreButton = document.getElementById("score-btn");
  const quizApp = document.getElementById("quiz-app");

  const quizQuestion = [
    {
      question: "What is the capital of Nigeria?",
      choices: ["Washington", "Paris", "Toronto", "Abuja"],
      answer: "Abuja",
    },

    {
      question: "What is the full meaninng of hp?",
      choices: ["Hork port", "Hial put", "Haul play", "Hewlett packard"],
      answer: "Hewlett packard",
    },

    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },

    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "Japan", "Thailand", "South Korea"],
      answer: "Japan",
    },

    {
      question: "How many continents are there on Earth?",
      choices: ["5", "6", "7", "8"],
      answer: "7",
    },

    {
      question: "What is the hardest natural substance on Earth?",
      choices: ["Gold", "Iron", "Diamond", "Quartz"],
      answer: "Diamond",
    },

    {
      question: "Which organ in the human body pumps blood?",
      choices: ["Liver", "Brain", "Heart", "Kidney"],
      answer: "Heart",
    },

    {
      question: "Which country has the largest population in the world?",
      choices: ["India", "United States", "China", "Indonesia"],
      answer: "India",
    },

    {
      question: "What is the tallest animal in the world?",
      choices: ["Elephant", "Giraffe", "Camel", "Horse"],
      answer: "Giraffe",
    },

    {
      question: "Which gas do plants absorb from the atmosphere?",
      choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: "Carbon dioxide",
    },

    {
      question: "In which month does the New Year begin?",
      choices: ["December", "January", "February", "March"],
      answer: "January",
    },

    {
      question: "Which country is famous for the Eiffel Tower?",
      choices: ["Italy", "France", "Spain", "Germany"],
      answer: "France",
    },

    {
      question: "How many days are there in a leap year?",
      choices: ["365", "366", "364", "367"],
      answer: "366",
    },

    {
      question: "Which ocean is the largest on Earth?",
      choices: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },

    {
      question: "What is the main language spoken in Brazil?",
      choices: ["Spanish", "Portuguese", "French", "English"],
      answer: "Portuguese",
    },

    {
      question: "Which shape has three sides?",
      choices: ["Square", "Triangle", "Rectangle", "Circle"],
      answer: "Triangle",
    },

    {
      question: "Which planet is closest to the Sun?",
      choices: ["Venus", "Earth", "Mercury", "Mars"],
      answer: "Mercury",
    },

    {
      question: "Which day comes after Friday?",
      choices: ["Sunday", "Monday", "Saturday", "Thursday"],
      answer: "Saturday",
    },
  ];

  quizApp.classList.remove("quiz-app-color");

  if (startButton) {
    startButton.addEventListener("click", () => {
      startButton.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      quizApp.classList.add("quiz-app-color");
      showQuestion();
      showChoices();
    });
  }

  let currentIndex = 0;
  let score = 0;
  let userAnswers = [];
  prevButton.addEventListener("click", prevQuestion);
  nextButton.addEventListener("click", nextQuestion);
  scoreButton.addEventListener("click", showScore);

  restartButton.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });
  //function area

  function startQuiz() {
    startButton.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
    showChoices();
  }
  function showQuestion() {
    const currentQuestion = quizQuestion[currentIndex];
    questionText.textContent = currentQuestion.question;
  }

  function showChoices() {
    const currentChoices = quizQuestion[currentIndex];
    choicesList.innerHTML = "";

    currentChoices.choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      if (userAnswers[currentIndex] === choice) {
        li.classList.add("selected");
        nextButton.classList.remove("hidden");
      }
      li.addEventListener("click", () => {
        choicesList
          .querySelectorAll("li")
          .forEach((item) => item.classList.remove("selected"));
        li.classList.add("selected");
        userAnswers[currentIndex] = choice;
        if (currentIndex > 0) {
          prevButton.classList.remove("hidden");
        } else {
          prevButton.classList.add("hidden");
        }
        nextButton.classList.remove("hidden");
      });
      li.addEventListener("click", () => scoreCal(choice));
      choicesList.appendChild(li);
    });
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex < quizQuestion.length) {
      showQuestion();
      showChoices();
    } else {
      questionContainer.innerHTML = "";
      choicesList.innerHTML = "";
      const h3 = document.createElement("h3");
      h3.textContent = "Quiz Completed";
      questionContainer.appendChild(h3);
      scoreButton.classList.remove("hidden");
      questionContainer.appendChild(scoreButton);
    }
  }

  function prevQuestion() {
    if (currentIndex > 0) {
      currentIndex--;
      showQuestion();
      showChoices();
    }
  }

  function scoreCal(choice) {
    const correctAnswer = quizQuestion[currentIndex].answer;

    if (correctAnswer === choice) {
      score++;
    }
  }

  function showScore() {
    questionContainer.innerHTML = "";
    choicesList.innerHTML = "";
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${quizQuestion.length}`;
  }
});
