//method 1) str.trim(); to trim extra space 
console.log("Hello sir");
//let str=prompt("Enter Word:");
let str="   Ilvecoding   ";
let newstr=str.trim();
console.log(`This is without trmi:${str}`);
console.log(newstr);

//method 2) str.toUpperCase()
//       3) str.tolowerCase()

console.log(`To make all letter uppercase=:=> ${str.toUpperCase()}`);
console.log(`To make all letter lowercase=:=> ${str.toLowerCase()}`);


//string methods
console.log(str.indexOf("lve"));
console.log(str.indexOf("a"));
console.log(str.indexOf("o"));


//method chaining using multiple method together

console.log(str.trim().toLowerCase());


//SLICING = taking particular part
let str2="IAMIRONMAN";
console.log(str2.slice(3));
console.log(str2.slice(3,7));
console.log(str2.slice(-1));

//replacing and repeat

console.log(str2.repeat(2));//repeat


console.log(str2.replace("IRON","sai"));//replace



















