let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".photo");
let msg=document.querySelector("#msg");

let val=document.querySelector("#y");
let cval=document.querySelector("#comp")

const genCompChoice =()=>{
    const options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    console.log(options[idx]);
    return options[idx];
}
const gameDrawn=()=>{
    msg.innerText=`Game is Drawn Play Again`;
    msg.style.color="blue";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        val.innerText=userScore;
        msg.innerText=`You Won!`;
        msg.style.color="green"
    }
    else{
        compScore++;
        cval.innerText=compScore;
        msg.innerText="You Lose!";
        msg.style.color="red";
    }
};
const playGame=(userChoice)=>{
    userWin=true;
    compChoice=genCompChoice();
    if(userChoice===compChoice){
        gameDrawn();
    }
    else {
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
    showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});
