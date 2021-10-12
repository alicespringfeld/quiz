const questionList = ["Am I a robot?", "Are you a cat?", "Is the earth flat?"];
let questionIndex = 0;

let correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[0];

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

function showAnswerIsCorrect() {
  const newPforJa = document.createElement("p");
  newPforJa.id = "pYes";
  newPforJa.textContent = "This answer is correct!";
  document.body.appendChild(newPforJa);
  setTimeout(setNewQuestion, 1200);
}

function showAnswerIsFalse() {
  const newPforNo = document.createElement("p");
  newPforNo.id = "pNo";
  newPforNo.textContent = "This answer is wrong!";
  document.body.appendChild(newPforNo);
  disableButtons();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

function setNewQuestion() {
  correctAnswer = false;
  questionIndex += 1;
  myQuestion.textContent = questionList[questionIndex];
  document.body.removeChild(document.querySelector("#pYes"));
}
