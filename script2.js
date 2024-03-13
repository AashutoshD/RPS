const letters=['rock','raper','scissors']
const randomInd=Math.floor(Math.random()*letters.length)
const randomletter=letters[randomInd]

let a
let rock_button=document.getElementById("rock")
let paper_button=document.getElementById("paper")
let scissors_button=document.getElementById("scissors")

rock_button.addEventListener("click", ()=> {
    a='rock';
    Winner();
})

paper_button.addEventListener("click",()=> {
    a='paper';
    Winner();

})

scissors_button.addEventListener("click",()=> {
    a='scissors';
    Winner();
})


function Winner(){
    let result;
    let resultElement = document.getElementById("result");

    if (randomletter == 'rock' && a == 'rock' || randomletter == 'paper' && a == 'paper' || randomletter == 'scissors' && a == 'scissors') {
        result = "WOW It's a draw";
    } else if (randomletter == 'rock' && a == 'scissors') {
        result = "Computer Wins!!!";
    } else if (randomletter == 'paper' && a == 'rock') {
        result = "Computer Wins!!!";
    } else if (randomletter == 'scissors' && a == 'paper') {
        result = "Computer Wins!!!";
    } else {
        result = "Congratulations, you win";
    }

    resultElement.innerHTML = "<h1>" + result + "</h1>";
}