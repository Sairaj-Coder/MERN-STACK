//this key word is used to access the same value in same method
let stud = {
    name: 'samruddhi',
    age: 23,

    eng: 95,

    phy: 96,

    math: 95,

    getavg() {
        console.log(this);//basically this print all the
        //object of this class
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`The average marks of ${this.name} is ${avg}`);
    }


};
console.log(stud.getavg());
function thiis() {
    console.log(this);//higher level object is only window all the
    //the code we write comes under this window oject
    //example= alert, promt by default windows directly take
    //it is not neccesaary  to write window.alert by default it understand


}
console.log(thiis());


//arrow function
const Sum = (a, b) => {
    console.log(a + b);

}
Sum(10, 10);

console.log(Sum);
//implicit function


const mul = (a, b) => (a * b)
let m = mul(6, 6);
console.log(m);


//time out function

function jarvis() {
    console.log("HI there!");
    alert("Ohh hello sir!");

}
// setTimeout(jarvis,4000);

// setTimeout((
//     ) => {
//         let a = Number(prompt("Enter a:"));
//         let b= Number(prompt("Enter b:"));
//         console.log(a+b);
//         alert(a+b);
//     }, 5000);
console.log("Program didn't stop");





//set interval
let id = setInterval(()=>{
    console.log("Hello sir");
    
},3000);

console.log(id);

//to stop we have to use id basically each interval has some id

setTimeout(()=>{
    clearInterval(id);
    console.log(`id has been clear: ${id}`);

},10000)





