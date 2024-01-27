// fist step lets give computer and you a name
let you = 0;
let computer = 0;

//on load function it is a good practice.
onload();

function onload() {
  // Remove the let keyword to avoid local redeclaration
  you = 0;
  computer = 0;
}

let user_choice;
let computer_choice;

function generatenumber() {
  return Math.floor(Math.random() * 3) + 1;
}

//i need my choice first
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
// i got all the images location now i just need to check which one was clicked.

function computerchoice() {
  //i need to create a rondom number between 1 to 3 and assign each number one value
  let randomnumber = generatenumber();
  if (randomnumber == 1) {
    computer_choice = "rock";
  } else if (randomnumber == 2) {
    computer_choice = "paper";
  } else {
    computer_choice = "scissors";
  }
  return computer_choice;
}

let result = document.getElementById("result");

function letsplay() {
  if (user_choice === "rock") {
    if (computer_choice === "rock") {
      result.innerText = "It's a tie!";
      result.style.backgroundColor = "black";
    } else if (computer_choice === "paper") {
      result.innerText = `Computer wins! You chose ${user_choice}, computer chose ${computer_choice}.`;
      computer++;
      result.style.backgroundColor = "red";
    } else if (computer_choice === "scissors") {
      result.innerText = `You win! You chose ${user_choice}, computer chose ${computer_choice}.`;
      you++;
      result.style.backgroundColor = "green";
    }
  } else if (user_choice === "paper") {
    if (computer_choice === "rock") {
      result.innerText = `You win! You chose ${user_choice}, computer chose ${computer_choice}.`;
      you++;
      result.style.backgroundColor = "green";
    } else if (computer_choice === "paper") {
      result.innerText = "It's a tie!";
      result.style.backgroundColor = "black";
    } else if (computer_choice === "scissors") {
      result.innerText = `Computer wins! You chose ${user_choice}, computer chose ${computer_choice}.`;
      computer++;
      result.style.backgroundColor = "red";
    }
  } else if (user_choice === "scissors") {
    if (computer_choice === "rock") {
      result.innerText = `Computer wins! You chose ${user_choice}, computer chose ${computer_choice}.`;
      computer++;
      result.style.backgroundColor = "red";
    } else if (computer_choice === "paper") {
      result.innerText = `You win! You chose ${user_choice}, computer chose ${computer_choice}.`;
      you++;
      result.style.backgroundColor = "green";
    } else if (computer_choice === "scissors") {
      result.innerText = "It's a tie!";
      result.style.backgroundColor = "black";
    }
  } else {
    result.innerText =
      "Invalid choice. Please choose rock, paper, or scissors.";
  }
}

function displayscore(you, computer) {
  let user = document.getElementById("user");
  user.innerText = you;
  let comp = document.getElementById("computer");
  comp.innerText = computer;
}

rock.addEventListener("click", () => {
  user_choice = "rock";
  computer_choice = computerchoice();
  letsplay();
  displayscore(you, computer);
});

paper.addEventListener("click", () => {
  user_choice = "paper";
  computer_choice = computerchoice();
  letsplay();
  displayscore(you, computer);
});

scissors.addEventListener("click", () => {
  user_choice = "scissors";
  computer_choice = computerchoice();
  letsplay();
  displayscore(you, computer);
});
