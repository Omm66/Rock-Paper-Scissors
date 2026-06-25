let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let userScorepara = document.querySelector("#user-score")
let compScorepara = document.querySelector("#comp-score")

const msg = document.querySelector("#msg");

const drawGame = ()=>{
    msg.innerText ="Game was Draw. Play again";
        msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin , userChoice , compChoice)=>{
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScorepara.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        compScore++;
        compScorepara.innerText = compScore;
        msg.style.backgroundColor = "red";

    }
};

const genCompChoice = ()=>{
    const option = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random()*3); 
    return option[randIdx];
};

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = (compChoice === "paper" ? false : true);
        }
        else if( userChoice === "paper"){
            userWin = (compChoice === "scissor" ? false : true);
        }
        else{
            userWin = (compChoice === "rock" ? false : true);
        }
        showWinner(userWin ,userChoice , compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});