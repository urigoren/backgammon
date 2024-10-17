let computerChoice = "paper";
let playerChoice = "paper";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const img = document.getElementById('computerChoice');
    const i = Math.floor(Math.random()*3);
    const choices = ['rock', 'paper', 'scissors'];
    computerChoice = choices[i];
    img.src = "img/"+choices[i]+".png";
}

function play(choice) {
    playerChoice = choice;
    const img = document.getElementById('playerChoice');
    const p = document.getElementById('resultText');
    if (choice === 'rock') {
        img.src = "img/rock.png";
    } else if (choice === 'paper') {
        img.src = "img/paper.png";
    } else if (choice === 'scissors') {
        img.src = "img/scissors.png";
    } else {
        img.src = "";
        alert('Invalid choice');
        return;
    }
    getComputerChoice();
    p.innerHTML = getResult(playerChoice, computerChoice);
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    return "Whoops";
}