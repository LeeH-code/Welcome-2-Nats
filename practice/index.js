const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error!");
    }
  };
  
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "tie game baby";
    }
    if (userChoice === "paper") {
      if (computerChoice === "Scissors") {
        return "You fuckin suck";
      } else {
        return "Congrats loser";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "You really rock! At being bad";
      } else {
        return "You won once... congrats";
      }
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "why did you choose rock dummy?";
      } else {
        return "You are really good at this skill based game!";
      }
    }
    if (userChoice === "bomb") {
      return "Nice Cheat baby";
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  
  