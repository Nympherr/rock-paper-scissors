let player;
let computer;
let result;
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

function playRound(player, computer){

        console.log(player);
        console.log(computer);
    switch(player){

        case "rock":
            if(computer == "rock"){
                console.log("It's a tie! rock vs rock")
            }
            else if(computer == "paper"){
                console.log("Player loses! rock vs paper")
            }
            else {
                console.log("Player wins! rock vs scissors")
            }
            break;
        
        case "paper":
            if(computer == "rock"){
                console.log("Player wins! paper wins against rock")
            }
            else if(computer == "paper"){
                console.log("It's a tie! paper does not beat paper")
            }
            else {
                console.log("Computer wins! paper loses against scissors")
            }
            break;
        
        case "scissors":
            if(computer == "rock"){
                console.log("Computer wins! scissors lose against rock")
            }
            else if(computer == "paper"){
                console.log("Player wins! scissors win against paper")
            }
            else {
                console.log("It's a tie! scissors don't beat scissors")
            }
            break;
    }
}
computer = computerChoice(computer);
player = playerChoice(player);
playRound(player,computer);
function game(){

}

function playAgain(){

}