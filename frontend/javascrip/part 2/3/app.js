console.log('connected');
//conditional statement
//1)if-else 2)nested if else 3)switch case 
let age = 18;
if (age >= 18) {
    console.log(`age is ready to marriage = ${age}`);

}
else {
    console.log(`you are child`);
}
if (true) {
    console.log(true, "conditon is true");
    age += 1;
}
console.log("similar to c++");
let name = "sairaj";
if (name == "sairaj") {
    console.log(`Welcome ${name} sir I am jarvis`);
}
//pratice question
console.log("this is pratice question");
let color = "yellow";
if (color === "red") {
    console.log("stop");
}
if (color === "yellow") {
    console.log("start engine!");
}
if (color === "green") {
    console.log("go");
}


//if-else
let agge=18;
if(agge>18){
    console.log("you are ready to survive alone");
}
else if(true){
    console.log("it will  run because statement above is true no other things will be check");

}
else if(agge=18){
    console.log("You are not ready yet but start!");

}
else{
    console.log("Get ready");
}



//else statement
if(false){
    console.log("everything is false");
}
else{
    console.log("else run when all condition became false ");
}
//question pratice 
// create a system to caculate popcorn prices on the 
//based on the size of customer asked for
console.log('This is popcorn system');
let size="";
if(size==='XL'){
    console.log(`Price is  Rs:${250}`);
}
else if(size==='L'){
    console.log(`Price is Rs:${200}`);
}
else if(size==='M'){
    console.log(`Price is Rs:${100}`);
}
else if(size='S'){
    console.log(`Price is Rs:${50}`);
}


//nested if else means writing if else inside if else

let marks='';//we know size of empty string is 0
if (marks>=33){
    if(marks>80){
        console.log(`O`);
    }
    else{
      console.log('A') ; 
    }
}
else{
    console.log(`better luck next time`);
}


//logical operator 1)&& 2)|| 3)!
//1) both condition must be true
console.log(true && true);
console.log(false && true);

//2)any condition must be true

console.log(true || true);
console.log(true || false);
console.log(false || false);


//3)make true condition false
console.log(`Not operator:${!true}`);
console.log(!false);










