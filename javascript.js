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

function playerChoice(player){
    let choice = prompt("Rock, paper or scissors?");
    choice = choice.toLowerCase();

    switch(choice){
        case "rock":
            player = "rock";
            break;
        case "paper":
            player = "paper";
            break;
        case "scissors":
            player = "scissors";
            break;
        default:
            console.log("You wrote something wrong!");
            playerChoice(player);
            break;
    }
    return player;
}

function playRound(){

}

function game(){

}

function playAgain(){

}