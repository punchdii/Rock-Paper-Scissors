console.log("hello");

//A game is 5 round, each round we get the computer and human choice, compare it, and track the scroe
//At the end of 5 round, end of playGame, we compare result and declare winner


var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){
    const options = ["rock","paper","scissors"];

    return options[Math.floor(Math.random()*3)];

};


function getHumanChoice(){
    return prompt("what is choice sir?");
};

function playRound(humanChoice, computerChoice){
    console.log("left comptuer right human")
    if (humanChoice=="rock"){
        if (computerChoice == "paper"){
           computerScore++;
        }
        if (computerChoice == "scissors"){
           humanScore++;
        }
        
    }

    if (humanChoice=="paper"){
        if (computerChoice == "rock"){
            humanScore++;
        }
    
        if (computerChoice == "scissors"){
            computerScore++;
        }
    }

    if (humanChoice=="scissors"){
        if (computerChoice == "rock"){
            computerScore++;       
        }
        
        if (computerChoice == "paper"){
            humanScore++;
        }
    }
    console.log(`computer: ${computerChoice}, human: ${humanChoice}`);

};


function playGame (){
    for (let i= 0;i<5;i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    }
    if (humanScore>computerScore){
        console.log('human wins');
    }
    else{
        console.log("computer wins");
    }
};