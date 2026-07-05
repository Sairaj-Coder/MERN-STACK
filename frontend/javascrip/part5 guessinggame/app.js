//user enters a max number and then tries to guess a 
//random generated number between 1 to max
let maxnum=prompt("Enter maximum number");
let ran_num=Math.floor(Math.random()*maxnum)+1;

while(true){
    let guess_num=prompt("Enter guess number");
    if(guess_num==ran_num){
        alert("you win:")
        break;
    }
    else if (guess_num>ran_num){
        alert("guess number is to large try again");

    }
    else if (guess_num<ran_num){
        alert("guess number is to small try again");

    }
    else if(guess_num=='quit' ){
        alert("Thanks you");
        break;
    }
    console.log("Try again");
    
}