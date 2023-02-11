
let resultPlayer = 0;
let resultComputer = 0;

function computerChoice(){
    let computer;
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
    let player;
    let choice;
    while(true){
       choice = prompt("Rock, paper or scissors?");
       choice = choice.toLowerCase();

       if(choice == "rock"){
        break;
       }
       else if (choice == "paper"){
        break;
       }
       else if (choice == "scissors"){
        break;
       }
    }

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
    }
    return player;
}

function playRound(){

        let computer = computerChoice();
        let player = playerChoice();

    switch(player){

        case "rock":
            if(computer == "rock"){
                console.log("It's a tie! rock vs rock")
            }
            else if(computer == "paper"){
                console.log("Player loses! rock vs paper")
                resultComputer++;
            }
            else {
                console.log("Player wins! rock vs scissors")
                resultPlayer++;
            }
            break;
        
        case "paper":
            if(computer == "rock"){
                console.log("Player wins! paper wins against rock")
                resultPlayer++;
            }
            else if(computer == "paper"){
                console.log("It's a tie! paper does not beat paper")
            }
            else {
                console.log("Computer wins! paper loses against scissors")
                resultComputer++;
            }
            break;
        
        case "scissors":
            if(computer == "rock"){
                console.log("Computer wins! scissors lose against rock")
                resultComputer++;
            }
            else if(computer == "paper"){
                console.log("Player wins! scissors win against paper")
                resultPlayer++;
            }
            else {
                console.log("It's a tie! scissors don't beat scissors")
            }
            break;
    }
}

function game(){
    console.log("This is a best of 5! Good luck!")
    for(let i = 0; i < 5; i++){
        playRound();
        console.log(`Player has ${resultPlayer} points!`);
        console.log(`Computer has ${resultComputer} points!`)
    }
    resultComputer = 0;
    resultPlayer = 0;
    playAgain();
}

function playAgain(){
    let choice = prompt("Would you like to play again? Yes/No?");
    choice = choice.toLowerCase();
    if (choice == "yes"){
        game();
    }
    else{
        console.log("Goodluck!");
    }
}

// game();