//global scope
console.log("Message connected");
let marks="outer scope/parent scope";
const stud = {
    name: "sairaj",
    marks: 95,
    prop: this,
    getName: function () {
        return this;
        // return this called all his parent element scope
        // is parent;
    },
    //write now we are creating arrow function
    getmark: () => {
        console.log(this);
        return this.marks;
    }
}
//console.log(stud.getName());
console.log(stud.getmark());




// write arrow function that prints hello world 5 times at interval of 2sec

let id5 = setInterval(function name(){
    console.log("Hello world");
},2000);
setTimeout(function stop(){
    clearInterval(id5);
},10000);


//write an arrow function that returns the square 
//of number n
const squa=n => n*n;

console.log(squa(6));

const sum = (n,m) => {
    console.log(n+m);
    return (n-m);
};
sum(81,1);
console.log(sum(81,1));




