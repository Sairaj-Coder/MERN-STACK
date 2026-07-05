console.log("Connected");
// Write a JavaScript program to get the
// first n elements of an 
// array.[n can be any positive number].
// For example : for array [7,9,0,-2] and n=3
// Print,[7,9,0]
let n = 3;
let arr = [7, 9, 0, -2];
console.log(arr.slice(0, n));


// Write a JavaScript program to get the last 
// n elements of an array . 
// [n can be any positive number]
// For example : for array [7,9,0,-2] and n=3
// Print , [9,0,-2]
console.log(arr.length);
console.log(arr.slice(-n));



//Write a JavaScript program to check whether
// a string is blank or not
let str = "sairaj";
if (str.length === 0) {
    console.log("blank");
}
else{
    console.log("The length of string is:"+ str.length);
}

// Write a JavaScript program to test whether 
// the character at the given (character) index
// is lowercase.
let str2="Sairaj";
let m=0;
if(str2[m]==str2[m].toLowerCase() ){
    console.log(`character is lowercase:${str2[m]}`);
}
else{
    console.log(`Its not lowercase:${str2[m]}`);
}





// Write a JavaScript program to strip leading and 
// trailing spaces from a string.

let str3="  hello";
console.log(str3.trim());



//Write a JavaScript program to check
// if an element exists in an array or not
let arra=[12,14,16];
let x=16;
console.log(arra.indexOf(x));
if(arra.indexOf(x) == -1){
    console.log(`Element does not Exist`);
}
else{
    console.log(`Element does  exist ${arra[arra.indexOf(x)]}`);
}















