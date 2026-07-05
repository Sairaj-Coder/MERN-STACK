console.log("Connected");
// Write an arrow function named arrayAverage 
// that accepts an array of numbers

const arrayAverage = ( arr ) =>{
    let sum=0;
    let count=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        count++;
    }
    return (sum/count);

};
let arry= [1,2,3,4,5,6,7,8,9];
let avg= arrayAverage(arry);
console.log(avg);



//Write an arrow function named isEven() that
// takes a single number as argument and returns if
//its odd or even
const iseven = (n) => {
    if(n%2==0){
        return "even";
    }
    else{
        return "odd";
    }
};

console.log(`this is ${iseven(10)}`);

//what is output
const object = {
    message :"Hello world",
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);//here output is undefined until paranthsis
//because it invoke the function but paranthesis called it
setTimeout(object.logMessage(),1000);


//what is output of following code

let length = 4;
function callback(){
    // console.log(this.length);
    console.log(length);
};
callback();//dont write in console




