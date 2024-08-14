
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
           
            alert(humanWins(humanChoice, computerChoice));
            alert("Punkt für dich");
        }else if(humanChoice === "Rock" && computerChoice === "Paper"){
            alert(computerWins(humanChoice, computerChoice));
            alert("Punkt für Computer");

        }else if(humanChoice === "Sciccors" && computerChoice === "Paper"){
            alert(humanWins(humanChoice, computerChoice));
            alert("Punkt für dich");
        }else if(humanChoice === "Paper" && computerChoice === "Sciccors"){
            alert(computerWins(humanChoice, computerChoice));
            alert("Punkt für Computer");

        }else if(humanChoice === "Rock" && computerChoice === "Sciccors"){
            alert(humanWins(humanChoice, computerChoice));
            alert("Punkt für dich");
        }else{
            alert(computerWins(humanChoice, computerChoice));
            alert("Punkt für Computer");
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

    function deleteScores(){
        computerScore=0;
        humanScore=0;
    }

    function humanWins(humanChoice, computerChoice){
        humanScore +=1;
        return humanChoice +" schlägt "+computerChoice;
    }

    
    function computerWins(humanChoice, computerChoice){
        computerScore +=1;
        return computerChoice +" schlägt "+humanChoice;
    }

    
