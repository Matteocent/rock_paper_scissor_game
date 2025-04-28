/*Brief presentation about the game*/
console.log("Game of 'Rock' 'Paper' 'Scissors'");
function getHumanChoice() {
    let HumanChoice = prompt("Enter your choice between 'Rock' 'Paper' 'Scissors':").toLowerCase();
    return HumanChoice;
}

function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 10);
    return ComputerChoice;
} 

let HumanScore = 0;
let ComputerScore = 0;

/*In this function the argument names are casual, not referred to previous functions */
function playRound(HumanChoice, ComputerChoice) {
    let output;
    if (HumanChoice == "rock") {
        if (ComputerChoice <= 3) {
            output = ("Try again, you both choose 'Rock'.");
        } else if (ComputerChoice > 3 && ComputerChoice <= 6) {
            output = ("Paper beats Rock, Computer wins.");
            ComputerScore ++;
        } else if (ComputerChoice > 6) {
            output = ("You won, Rock beats scissors");
            HumanScore ++;
        }
    }
    if (HumanChoice == "paper") {
        if (ComputerChoice <= 3) {
            output = ("You won, Paper beats Rock.");
            HumanScore ++;
        } else if (ComputerChoice > 3 && ComputerChoice <= 6) {
            output = ("Try again, you both choose Paper");
        } else if (ComputerChoice > 6) {
            output = ("Scissors beats Paper, Computer wins");
            ComputerScore ++;
        }
    }
    if (HumanChoice == "scissors") {
        if (ComputerChoice <= 3) {
            output = ("Rock beats Scissors, Computer wins.")
            ComputerScore ++;
        } else if (ComputerChoice > 3 && ComputerChoice <= 6) {
            output = ("You won, Scissors beats Paper");
            HumanScore ++;
        } else if (ComputerChoice > 6) {
            output = ("Try again, you both choose Scissors");
        }
    }
    console.log(`User score is: ${HumanScore}`);
    console.log(`Computer score is: ${ComputerScore}`);
    return output;
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
console.log(playRound(getHumanChoice(), getComputerChoice()));
