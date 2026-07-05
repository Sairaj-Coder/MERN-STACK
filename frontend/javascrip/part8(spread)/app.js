console.log("Hello sir i am connected");
//spread concept==bascially spread each element of arry string or objec
console.log(..."Sairaj Shirole");
let arr=[3,2,5,-1,7,4];
console.log(...arr);
console.log(Math.min(...arr));

//aray literals making copy

let newarr =[...arr];
console.log("This is new array");
console.log(newarr);

let str="sairaj";
let newstr=[...str];
console.log(newstr);


//we can merge two array 

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let wholenum =[...odd,...even];
console.log(wholenum);


//we can copy object also 

let obj ={
    name:"Sairaj",
    password:"abcd"
};

let newobj ={...obj,id:123,arr:[1,2,3]};
console.log(newobj);//now here password is added and even data is 
//copy array also

//we can convert array to object without key
//here index of array becames key

let arry=["sairaj",1,"India"];

let objj = {...arry,sister:"samruddhi"};
console.log(objj);

//lets try with string

let string="I am sairaj";
let strg ={...string};
console.log(strg);
console.log(objj["sister"]);

//we can access particular part also


//rest and destructuring

//destructuring
let names=["Tony","Steve","Bruce","Peter","xyz"];
let [winner,runner]=names;
console.log(winner);

//rest collecting
function rest(...args){
    console.log(args);
    console.log(args[0]);
};
rest(["hi","hi"],"Iron man",1,2,4,5,6,"hello");



//destructuring with object

let employe = {
    name:"sairaj",
    number:234325,
    address:"xyz",
    college:"MESCOE",
    email:"sairajshirole2@gmail.com",
    pass:"pass"
};
let{email , number}=employe;//write key
console.log(email,number);
///if we want to store the value into another keyword
//just write key:variable
let{name:firstname ,pass:password,city ="default-value",town:village="another variable"} = employe;
console.log(firstname,password,city,village);
//default value can be given if key not present 
//defalut value can be store in another variable also
//console.log(employe);
