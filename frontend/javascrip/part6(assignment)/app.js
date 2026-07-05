console.log("conected");
//Write a JavaScript function that returns array elements larger than a 
// number.
function large(n, arr) {
    let num = n;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            return arr[i];
        }
    }

}


//Write a JavaScript function that accepts a list of country names as input and returns 
// the longest country name as output

function lar_countr(arr) {
    let y = arr[0].length;
    let z = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let x = 0;

        for (let j = 0; j < arr[i].length; j++) {
            x++;
        }
        if (x > y) {
            y = x;
            z = arr[i];

        }
    }
    return z;

}
let list = ["Australia                   ", "Germany", "United States of America", "Sairaj chandrakant shirole"];
console.log(lar_countr(list));


//Qs4 . Write a JavaScript function to count the 
// number of vowels in a String argument.


function vovel_count(strg) {
    let x = 0;
    for (let i = 0; i < strg.length; i++) {
        if (strg[i] == 'a' || strg[i] == 'e' || strg[i] == 'i' || strg[i] == 'o' || strg[i] == 'u') {
            x++;
        }
        if (strg[i] == 'A' || strg[i] == 'E' || strg[i] == 'I' || strg[i] == 'O' || strg[i] == 'U') {
            x++;
        }
    }
    console.log(`The maximum vovels are ${x}`);

}
vovel_count("Sairaj Chandrakant SHIROLE");

//Write a JavaScript function to generate a random 
//number with in a range (start,END)

function ran_num(start, end = 0) {
    let ran = Math.floor((Math.random() * 6)) + start;
    console.log(ran);
}
ran_num(25, 30);

//Write a JavaScript function to extract unique 
// characters from a string

//==>see ans in assignment

function uni(strg){
    let ans="";
    for(let i=0;i<strg.length;i++){
        let currchar=strg[i];
        if(ans.indexOf(currchar) == -1 ){
            ans+=currchar;
        }
    }
    console.log(ans);

}
uni("abcdabcdefgggh");





