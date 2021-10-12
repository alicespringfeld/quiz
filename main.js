const correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Am I a robot?";

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    const newPforJa = document.createElement("p");
    newPforJa.id = "pYes";
    newPforJa.textContent = "This answer is correct!";
    document.body.appendChild(newPforJa);
  } else {
    const newPforNo = document.createElement("p");
    newPforNo.id = "pNo";
    newPforNo.textContent = "This answer is wrong!";
    document.body.appendChild(newPforNo);
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    const newPforJa = document.createElement("p");
    newPforJa.id = "pYes";
    newPforJa.textContent = "This answer is correct!";
    document.body.appendChild(newPforJa);
  } else {
    const newPforNo = document.createElement("p");
    newPforNo.id = "pNo";
    newPforNo.textContent = "This answer is wrong!";
    document.body.appendChild(newPforNo);
  }
};
