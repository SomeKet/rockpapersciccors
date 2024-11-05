
var humanScore=0;
var computerScore=0;

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){

    const randomValue = getRandomInt(3);

    if(randomValue===0){
        return "Rock";
    }else if(randomValue===1){
        return "Paper";
    }else{
        return "Sciccors";
    }

}

function getHumanChoice(){
    const choice = prompt("Rock, Paper or Sciccors?").toLowerCase();
    if(choice === "rock"){
        return "Rock";
    }else if(choice === "paper"){
        return "Paper";
    }else if(choice === "sciccors"){
        return "Sciccors";
    }else{
        alert("Ungültige Eingabe");
        getHumanChoice();

    }
}

    function playRound(humanChoice, computerChoice){

        if(humanChoice === computerChoice){
            alert("Draw");
        }else if(humanChoice === "Paper" && computerChoice === "Rock"){
            humanWins();
            pointsToHuman();
        }else if(humanChoice === "Rock" && computerChoice === "Paper"){
            computerWins();
            pointsToCom();
        }else if(humanChoice === "Sciccors" && computerChoice === "Paper"){
            humanWins();
            pointsToHuman();
        }else if(humanChoice === "Paper" && computerChoice === "Sciccors"){
            computerWins();
            pointsToCom();

        }else if(humanChoice === "Rock" && computerChoice === "Sciccors"){
            humanWins();
            pointsToHuman();
        }else{
            computerWins();
            pointsToCom();
        }
    }

    function scores(){
        if(computerScore > humanScore){
            alert("Computer führt mit "+computerScore +" zu " + humanScore);
        }else if(humanScore > computerScore){
            alert("Du führst mit "+humanScore +" zu " + computerScore);
        }else{
            alert("Unentschieden, " + humanScore+":"+computerScore);
        }
    }

    function play3(){
    
        while(humanScore <3 && computerScore <3){
            playRound(getHumanChoice(), getComputerChoice());
        }
        return humanScore > computerScore ?
         "Du gewinnst mit " + humanScore + ":" +computerScore :
         "Computer gewinnt mit " + computerScore + ":" + humanScore; 
    }

    function play5(){
    
        while(humanScore <5 && computerScore <5){
            playRound(getHumanChoice(), getComputerChoice());
        }
        let human = humanScore;
        let com = computerScore;
        deleteScores();
        return human > com ?
         "Du gewinnst mit " + human + ":" +com :
         "Computer gewinnt mit " + com + ":" + human; 
    }


    function humanWins(humanChoice, computerChoice){
        humanScore +=1;
        console.log(humanScore);
        if(humanScore == 3){
            alert("You Won the Game")
        }else{
            return "You = " + humanChoice +" beat "+ "Computer = " + computerChoice;
        }
    }

    
    function computerWins(humanChoice, computerChoice){
        computerScore +=1;
        console.log(computerScore);
        if(computerScore == 3){
            alert("Computer Won the Game");
        }else{
            return "Computer = " + computerChoice +" beats "+ "You = " +humanChoice;
        }
    }


    const playRock = document.getElementById("rock");
    playRock.addEventListener('click', () => {
        const p = "Rock";
        playRound(p, getComputerChoice());
    });
    
    const playPaper = document.getElementById("paper");
    playPaper.addEventListener('click', () => {
        const p = "Paper";
        playRound(p, getComputerChoice());
    });
    
    const playSciccors = document.getElementById("sciccors");
    playSciccors.addEventListener('click', () => {
        const p = "Sciccors";
        playRound(p, getComputerChoice());
    });

    function pointsToHuman(){
        const result = document.createElement("p");
            result.classList.add("result-label");
            result.textContent = "X"
        const element = document.getElementById("human");
        element.appendChild(result);
    }
    function pointsToCom(){
        const result = document.createElement("p");
            result.classList.add("result-label");
            result.textContent = "X"
        const element = document.getElementById("computer");
        element.appendChild(result);
    }

    const clearBtn = document.getElementById("clear");
    clearBtn.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        const human = document.getElementById("human");
        const com = document.getElementById("computer");
        
        //Entferne alle zusätzlich angehefteten "result-label"
        const removeLabelHuman = human.querySelectorAll(".result-label");
        const removeLabelCom = com.querySelectorAll(".result-label");

        removeLabelHuman.forEach(label => label.remove());
        removeLabelCom.forEach(label => label.remove());
    
    })
    
