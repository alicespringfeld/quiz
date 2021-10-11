const correctAnswer = false;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = "Am I a robot?";

document.querySelector(".yes").onclick = function () {
  if (correctAnswer === true) {
    alert("Correct!");
  } else {
    alert("False! I am a true robot!");
  }
};

document.querySelector(".no").onclick = function () {
  if (correctAnswer === false) {
    alert("Correct!");
  } else {
    alert("False! I am a true robot!");
  }
};
