let player;
let computer;
let play = false;

function computerChoice(computer){
    let number = Math.floor(Math.random() * 3) + 1;
    switch(number){
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
    return computer;
}



function playerChoice(){

}

function playRound(){

}

function game(){

}

function playAgain(){

}