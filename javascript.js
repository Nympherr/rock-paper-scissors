
let resultPlayer = 0;
let resultComputer = 0;
let gameNumber = 1;


const playerTab = document.createElement("div");
playerTab.style.cssText = "display:flex; justify-content:center;margin-top: 45px;";

const playerIcon = document.createElement("img");
const computerIcon = document.createElement("img");
playerIcon.src = "./images/human.png";
playerIcon.style = "width:40px; height:40px; margin-right:15px; display:flex; align-items:center;"

computerIcon.src = "./images/computer.jpg";
computerIcon.style = "width:40px; height:40px; margin-right:15px; margin-top:15px; display:flex; align-items:center;"


const choiceInfo = document.createElement("div");
choiceInfo.style.cssText = "color:white; text-align:center; font-size: 30px;";

const computerTab = document.createElement("div");
computerTab.style.cssText = "display:flex; justify-content:center;margin-top: 20px;";
const computerInfo = document.createElement("div");
computerInfo.style.cssText = "color:white; text-align:center; font-size: 30px;";

const playerScore = document.createElement("div");
computerInfo.style.cssText = "color:white; text-align:center; margin-top: 20px; font-size: 30px;";

const computerScore = document.createElement("div");
computerInfo.style.cssText = "color:white; text-align:center; margin-top: 20px; font-size: 30px;";

const result = document.createElement("div");
result.style.cssText = "color:#3c0931; text-align:center; margin: 45px; font-size: 65px;";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        const playerChoice = this.id;
        game(playerChoice);
    })
});

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

function playRound(playerChoice, computer){


    switch(playerChoice){

        case "rock":
            if(computer == "rock"){
                result.textContent ="It's a tie!";
            }
            else if(computer == "paper"){
                result.textContent ="Player loses!";
                resultComputer++;
            }
            else {
                result.textContent ="Player wins!";
                resultPlayer++;
            }
            break;
        
        case "paper":
            if(computer == "rock"){
                result.textContent ="Player wins!";
                resultPlayer++;
            }
            else if(computer == "paper"){
                result.textContent ="It's a tie!";
            }
            else {
                result.textContent ="Computer wins!";
                resultComputer++;
            }
            break;
        
        case "scissors":
            if(computer == "rock"){
                result.textContent ="Computer wins!";
                resultComputer++;
            }
            else if(computer == "paper"){
                result.textContent ="Player wins!";
                resultPlayer++;
            }
            else {
                result.textContent ="It's a tie!";
            }
            break;
    }
}

function game(playerChoice){

    if(gameNumber > 6){
        gameNumber = 0;
        resultPlayer = 0;
        resultComputer = 0;
    }
    let computer = computerChoice();
    playRound(playerChoice,computer);

    playerTab.appendChild(playerIcon);
    choiceInfo.textContent = `has chosen ${playerChoice}`;
    playerTab.appendChild(choiceInfo);
    document.body.appendChild(playerTab);

    computerTab.appendChild(computerIcon);
    computerInfo.textContent = `has chosen ${computer}`;
    computerTab.appendChild(computerInfo);
    document.body.appendChild(computerTab);

    document.body.appendChild(result);
    const scoreTitle = document.createElement("div");
    scoreTitle.textContent = `SCORE(GAME ${gameNumber})`;
    scoreTitle.style.cssText = "text-align:center; color:white; margin-top: 45px; font-size: 40px";
    result.appendChild(scoreTitle);

    const summary = document.createElement("div");
    summary.style.cssText = "color:white; text-align:center; margin-top: 20px; font-size: 30px;";
    summary.textContent = `Player ${resultPlayer} : Computer ${resultComputer}`;
    result.appendChild(summary);


    if(gameNumber == 5){
        
        playAgain();
    }
    ++gameNumber;
}

function playAgain(){
    let choice = prompt("Would you like to play again? Yes/No?");
    choice = choice.toLowerCase();
    if (choice == "yes"){
        location.reload();
    }
    else{
        location.reload();
    }
}
