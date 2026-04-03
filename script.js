document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const navigator = document.getElementById("navigator");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const scoreBtn = document.getElementById("score-btn");
  const resultContainer = document.getElementById("result-container");
  const userScore = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  const quizStatus = document.getElementById("quiz-status");
  const reviewBtn = document.getElementById("review");
  const reviewContainer = document.getElementById("review-container");

  //   Array of objects that holds the question, choices and answers
  const quizQuestions = [
    {
      question: "What is the capital of Nigeria?",
      choices: ["Abuja", "Paris", "Lagos", "Tokyo", "England"],
      answer: "Abuja",
    },

    {
      question: "What is the capital of United State of America?",
      choices: ["Mumbai", "Paris", "Lagos", "Washignton DC", "London"],
      answer: "Washignton DC",
    },

    {
      question: "What is the third planent from the sun?",
      choices: ["Mecury", "Jupiter", "Pluto", "Earth", "Mars"],
      answer: "Earth",
    },
  ];

  // Setting the index of my object to be equal to 0 at first so it can start the quiz at the first question
  let currentIndex = 0;
  let selectedChoice = null;

  // score is at 0 at default
  let score = 0;

  // creating an array that holds the choice a user picked
  const userAnswer = [];

  //  Enabling start quiz button
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startQuiz();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextButton();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevButton();
    });
  }

  if (scoreBtn) {
    scoreBtn.addEventListener("click", () => {
      displayScore();
    });
  }
  // Restart the quiz afresh
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      score = 0;
      selectedChoice = null;
      resultContainer.classList.add("hidden");
      currentIndex = 0;
      questionContainer.classList.remove("hidden");
      quizStatus.innerHTML = "";
      scoreBtn.classList.add("hidden");
      questionText.classList.remove("hidden");
      choicesList.classList.remove("hidden");
      startQuiz();
    });
  }
  // user can review questions and answers
  if (reviewBtn) {
    reviewBtn.addEventListener("click", () => {
      reviewContainer.classList.remove("hidden");
      resultContainer.classList.add("hidden");
      reviewContainer.innerHTML = "";

      quizQuestions.forEach((question, index) => {
        // creating a div element that wraps the items in the review container
        const reviewContents = document.createElement("div");

        // creating a p element for the question
        const userQuestionText = document.createElement("p");
        userQuestionText.textContent = question.question;
        userQuestionText.classList.add("special-font1");

        // p element for the userAnswer
        const userAnswerText = document.createElement("p");
        userAnswerText.textContent = `Your answer: ${userAnswer[index]}`;
        userAnswerText.classList.add("special-font2");

        // p element for the correct answer
        const correctAnswerText = document.createElement("p");
        correctAnswerText.style.color = "yellow";
        correctAnswerText.textContent = `Correct answer: ${question.answer} `;

        if (userAnswer[index] === question.answer) {
          userAnswerText.style.color = "green";
          userAnswerText.textContent = `Your answer: ${userAnswer[index]} "✅"`;
        } else {
          userAnswerText.style.color = "red";
          userAnswerText.textContent = `Your answer: ${userAnswer[index]} "❌"`;
        }

        // appending the content in the div created to the div
        reviewContents.appendChild(userQuestionText);
        reviewContents.appendChild(userAnswerText);
        reviewContents.appendChild(correctAnswerText);

        // appending the review content to review container that is created in html
        reviewContainer.appendChild(reviewContents);
      });
    });
  }

  //   Displaying question
  function showQuestion() {
    const currentQuestion = quizQuestions[currentIndex];
    questionText.textContent = currentQuestion.question;
  }

  //   Displaying choices
  function showChoices() {
    const currentChoices = quizQuestions[currentIndex];
    choicesList.innerHTML = "";
    selectedChoice = null;
    currentChoices.choices.forEach((choice) => {
      const list = document.createElement("li");
      list.textContent = choice;
      choicesList.appendChild(list);

      // A choice that a user selected will be the selectedChoice
      list.addEventListener("click", () => {
        // A variable named previous answer holds the array which is user answer that contains the choices that a user picks
        const previousAnswer = userAnswer[currentIndex];

        selectedChoice = choice;
        console.log("selected choice:", selectedChoice);

        // if the selectedChoice is equal to the answer of the current question, then the score will be updated
        if (
          selectedChoice === quizQuestions[currentIndex].answer &&
          previousAnswer !== quizQuestions[currentIndex].answer
        ) {
          score++;
          console.log(
            "The previous choice is wrong and the current choice is right so the score has been added by 1",
          );
          console.log("Score:", score);
        } else {
          console.log("wrong choice");
        }

        // if the previous answer is right but the current choice is wrong, score the score will be subtracted
        if (
          previousAnswer === quizQuestions[currentIndex].answer &&
          selectedChoice !== quizQuestions[currentIndex].answer
        ) {
          score--;
          console.log("Score", score);
          console.log(
            "Previous choice is right and current choice is wrong so score subtracted by 1",
          );
        }

        // if the previous choice picked is the same as current choice picked then nothing happens
        if (previousAnswer === selectedChoice) {
          console.log("choice has already been picked!");
          return;
        }

        userAnswer[currentIndex] = selectedChoice;
      });

      // Enabling the next button to appear after a choice is selected
      list.addEventListener("click", () => {
        navigator.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
      });

      //   Previous Button only appears when on the second quiz question
      if (currentIndex > 0) {
        prevBtn.classList.remove("hidden");
      }
    });
  }

  //   Enabling the next button and shows a message after the quiz is completed
  function nextButton() {
    currentIndex++;
    if (currentIndex < quizQuestions.length) {
      showQuestion();
      showChoices();
    } else {
      questionText.classList.add("hidden");
      choicesList.classList.add("hidden");
      nextBtn.classList.add("hidden");
      prevBtn.classList.add("hidden");
      const quizCompleted = document.createElement("h2");
      quizCompleted.textContent = "Quiz Completed!";
      quizStatus.appendChild(quizCompleted);
      scoreBtn.classList.remove("hidden");
      questionContainer.appendChild(scoreBtn);
    }
  }

  //   Enabling the prev button
  function prevButton() {
    currentIndex--;
    showQuestion();
    showChoices();
  }

  // displaying score
  function displayScore() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    userScore.innerHTML = `${score} out of ${quizQuestions.length}`;
  }

  // what displays when the quiz starts
  function startQuiz() {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
    showChoices();
  }
});
