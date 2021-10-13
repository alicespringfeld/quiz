const questionList = ["Am I a robot?", "Are you a cat?", "Is the earth flat?"];

const answers = [true, false, false];

let questionIndex = 0;

let correctAnswer = answers[questionIndex];

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[questionIndex];
updateProgress();

function updateProgress() {
  const myProgress = document.querySelector(".progress");
  /*myProgress.textContent =
  "Question" + (questionIndex + 1) + "/" + questionList.length
};*/
  myProgress.textContent = `Question ${questionIndex + 1}/${
    questionList.length
  }`;
  if (questionIndex === 3) {
    document.querySelector(".progress").textContent = "Yay you did it! ";
    document.querySelector(".yes").style.display = "none";
    document.querySelector(".no").style.display = "none";
    document.querySelector(".progress").classList.add("finish");
  }
}

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsFalse();
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsFalse();
  }
};
const sectionQuiz = document.querySelector(".quiz");

function showAnswerIsCorrect() {
  const newPforJa = document.createElement("p");
  newPforJa.id = "pYes";
  newPforJa.textContent = "This answer is correct!";
  sectionQuiz.appendChild(newPforJa);
  setTimeout(setNewQuestion, 1200);
}

function showAnswerIsFalse() {
  const newPforNo = document.createElement("p");
  newPforNo.id = "pNo";
  newPforNo.textContent = "This answer is wrong!";
  sectionQuiz.appendChild(newPforNo);
  disableButtons();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

function setNewQuestion() {
  questionIndex += 1;
  updateProgress();
  correctAnswer = answers[questionIndex];
  myQuestion.textContent = questionList[questionIndex];
  sectionQuiz.removeChild(document.querySelector("#pYes"));
}

function quizend() {
  document.querySelector(".quiz");
}
