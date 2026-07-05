function printName(){
    console.log("Hello this is my first function");
}
function number(){
    for(let i=0;i<5;i++){
        console.log(i);

    }
}
//caliing function
printName();
//number();

//write a function to print poem
function poem(){
    console.log("This is poem");
    console.log("Twinkle twinklw little star");
}
poem();
// create a function to roll a dice and always display the 
// value of dice (1 to 6);
function dice(){
    let num = Math.floor(Math.random()*6)+1;
    console.log(num);
}
dice();

//function funcName(arg1,arg2,...){ // do something}

function printname(name="not enter",age,roll=10){//multiple arguments can be passed
    console.log(`Name is ${name} and age is ${age} and rol num ${roll}`);
}
printname("Sairaj",18);
printname("Sairaj");

//create a function that gives us the average of 3 number
function average(a,b,c){
    let avg=(a+b+c)/3;
    console.log(`The average is ${avg}`);

}
//average(2,2,2);
//average(25,50,25);


//create a function that prints the multiplication table of a number
function table(n){

    for(let i=1;i<=10;i++){
        console.log(n*i);
    }

};
//table(7);

function table2(n,i=1){
    if(i==11){
        return;
    }
    console.log(n*i);
    table2(n,i+1);

}
//table2(19);

//return keyword= returns vale

function retsum(a,b){
    c=a+b;
    return c;
}
//once return written function stops


console.log(retsum(2,3));
// we can call function twice in same function
let x= retsum(retsum(5,5),5);
console.log(x);

//write a function that returns the sum of number from 1 to n
function sum_num(n){
    let x=0;
    for(let i=1;i<=n;i++){
        x=x+i;//x+=i
    }
    return x;
}
console.log(sum_num(3));


//concatenation
let arry=["hello","I","jarvis"];
function con(arry){
    let x="";
    for(let i=0;i<arry.length;i++){
        x=x+arry[i];
    }
    return x;

}
console.log(con(arry));


//function expression


let sum = function(a,b){
    return a+b;
}
console.log(sum(5,5));


//high order function

function high_order(func,n){
    for(let i=0;i<n;i++){
        func();

    }
}
let greet = function(){
    console.log("Hello sir");
}
high_order(greet,5);


// function factory/high order function :-
function oddeventest(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;

    }
    if(request=="even"){
        let even=function(n){
            console.log((n%2==0));
        }
        return even;
    }
    else{
        console.log("Invalid request");
    }

}
let request= "odd";
let newfun = oddeventest(request);


//methods: declaring functions in object

let cal = {
    num:55,
    add:function(a,b){
    return a+b;
    },
    sub:function(a,b){
        return (a-b); 
    },
    mul:function(a,b){
        return a*b;
    }
};

let mul= cal.mul(6,6);
console.log(mul);
console.log(cal.add);









