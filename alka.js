console.log("hello world!");
document.addEventListener("alka",function(){console.log("hello world!");});
console.log(typeof"alka");
console.log(typeof 23);
console.log("i am a girl".length);
const myVariable="alkasingh";
console.log(myVariable.charAt(4));
console.log(Number.isInteger())  //for checking no is integer or not
console.log(Number.parseFloat())  //for parses an argument and return a floting number 
alka 
sumit     
let age = 26;
const student={
    NAME :"Alka kumari",
    AGE:21,
    CGPA:8.5,
    isPass:true,
};
// how to create a const object called product to store info
const product={
    fullName:"doms pen",
    price:15,
    offer:5,
    rating:5,
    deal:true,
    };
    // to create a social media profile
    const profile={
        userName:"alkasingh2528",
        fullName:"alka singh",
        followers:91,
        following:110,
        bio:"blissfull",
    };
    console.log(profile);
    //maths method
    console.log(Math.PI);
    console.log(Math.trunc(Math.PI));
    console.log(Math.round(Math.PI));
    console.log(Math.ceil(Math.PI));
    console.log(Math.floor(Math.PI));
    console.log(Math.pow(2,6));
    console.log(Math.max(1,4,8,9));
    console.log(Math.random());
    //QUESTION-WRITE A CODE THAT WILL RETURN RANDOM LETTER FROM ALKA
    //STEP 1
    console.log("alka".charAt())
    //step 2
    console.log(Math.random())
    //now
    console.log("alka".charAt(Math.floor(Math.random()*4)));
    const anyName ="akanksha";
    console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
    //CONDITIONAL STATEMENT
    let mode="dark";
    let color;
    if (mode="dark"){
        color="black";
    }
    else{
        color="white";
    }
    console.log(color);
    //teneray operator
    let oldAge=29;
    let result= oldAge>50? "old" : "adult";
    console.log(result);
//alert("hiiii!!"); just pop to the screen
//confirm("ok===true\ncancel===false");ll
//prompt("hello!"); prompt have space to fill the value with pop up
//que
let num = prompt("enter a number");

if(num%5===0){
    console.log(num,"divisible");
}else{
    console.log(num,"not divisible");
}
//2 que
let score=50;
let grade;
if(score>=90 && score<=100){
grade="A";
}else if(score>=70 && score<=89){
    grade="B";
} else if(score>=60&&score<=69){
    grade="C";
}
else if(score>=50&&score<=59){
    grade="D";
}
else if(score>=0&&score<=49){
    grade="B";
}
console.log("your grade is:",grade);
//first game


let playGame = confirm("Can we play rock, paper, scissors?");

if (playGame) {
    let playerChoice = prompt("Please enter rock, paper, or scissors");

    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3) + 1;
            let computer =
                computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";

            let result =
                playerOne === computer
                    ? "Tie game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins`
                    : playerOne === "paper" && computer === "scissors"
                    ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins`
                    : playerOne === "scissors" && computer === "rock"
                    ? `Player One: ${playerOne}\nComputer: ${computer}\nComputer wins`
                    : `Player One: ${playerOne}\nComputer: ${computer}\nPlayer One wins`;

            alert(result);
        } else {
            alert("You didn't enter a valid choice (rock, paper, or scissors).");
        }
    } else {
        alert("I guess you changed your mind");
    }
} else {
    alert("Okay, maybe later");
}

//loops
//que
//let gameNum=2;
//let userNum=prompt("enter ur num:");
//while(userNum!=gameNum){
  //userNum= prompt("YOU ENTERED WRONG NUM.GUESS AGAIN");
}
console.log("congratulations");
//templet literals
//a way to have embedded expressions in strings
`string text ${ s}string text`
//strings are unmutable
//arrays are mutable
//que on array
let marks=[85,97,44,37,76,60];
let sum =0;
// que on array
let companies=["bloomberg","microsoft","uber","google"];
companies.shift()//remove first element from array
companies.splice(2,1,"ola");//idex,remove,add
companies.push("amazon");//push=add from end,unshift =add from start
//pop=del from end
//functions
function countVowels(str){
    let count =0;
    for(const char of str ){
       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
       }
       
    }
    console.log(count);
}
//que
let Num=[2,3,4,5,6];
Num.forEach((Num) => {
    console.log(Num*Num);
});
//MAP
let Number=[2,45,67];
let newArr=Number.map((val)=> {
    return val*2;

});
console.log(newArr);
//filter
let arr=[2,3,4,5,6];
let EvenArr=arr.filter((val)=>{
    return val%2===0;
});
console.log(EvenArr);
//reduce
let arr=[1,2,3,4,5];
const output=arr.reduce((res,curr)=>{
    return res+curr;

});
//dom=document object model
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+"by alka";
