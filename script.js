// let a = prompt("Enter a number",80)
// let w=confirm("Do you want to continue to write on this particular fine page of finesse?");

// if(w){
//     document.write(a)
// }else{
//     alert("No permission")
// }

// console.log(window)
// console.log(document)

//practice set 1
// const canRide=(age)=>{
//     return age>18?true:false;
// }

// let run=true;

// while(run){
// let age =prompt("Enter your age");
// age=Number.parseInt(age);
// if(age<0){
//     alert("NO negatie ages bro")
//     console.error("Please enter a valid age");
//     break;
// }
// if(canRide(age)){
//     alert("Yes you can drive")
// }else{
//     alert("Nani the fuck you cant")
// }
//  run=confirm("Do you want to run again?")
// }
//redirection

// let num= prompt("Enter a number");
// num=Number.parseInt(num);

// if(num>4){
//     location.href="https://google.com"
// }

// let color=prompt("Enter the bg color for page");

// document.body.style.background=color;



//rock paper scissors game

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

