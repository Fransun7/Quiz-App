document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");
  const scoreButton = document.getElementById("score-btn");

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
  ];

  if (startButton) {
    startButton.addEventListener("click", () => {
      startButton.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      showQuestion();
      showChoices();
    });
  }

  let currentIndex = 0;
  let score = 0;

  nextButton.addEventListener("click", nextQuestion);
  scoreButton.addEventListener("click", showScore);
  restartButton.addEventListener("click", ()=> {
    currentIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });
  //function area

  function startQuiz() {
    startButton.classList.add("hideen");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
    showChoices();
  }
  function showQuestion() {
    questionContainer.innerHTML = "";

    // getting the current objects out of the the three objects, in my case i am starting with the first object
    const currentQuestion = quizQuestion[currentIndex];
    //creating my h2 element
    const h2 = document.createElement("h2");
    //putting my object property-value as the created element text
    h2.textContent = currentQuestion.question;
    //making the element appear in the container on the screen
    questionContainer.appendChild(h2);
  }

  function showChoices() {
    const currentChoices = quizQuestion[currentIndex];
    currentChoices.choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        li.classList.add("selected");
        nextButton.classList.remove("hidden");
        questionContainer.appendChild(nextButton);
      });
      li.addEventListener("click", () => scoreCal(choice));
      questionContainer.appendChild(li);
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
