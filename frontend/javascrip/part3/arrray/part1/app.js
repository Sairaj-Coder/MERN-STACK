let msg="connected";
//we are going
let arr = ["Sairaj","Shirole","Iron man",5];
console.log(arr[1]);
console.log(arr[3]);
console.log(arr.length);
arr[10]="length increase";//middle all empty
//array length
arr.push("Sai");//add at last endex
arr.unshift("jarvis");//add to start

console.log(arr.pop());//if we didn't write inside console 
//output will not be seen
console.log(arr.shift());
arr.shift();//delete last element


//pratice question

let start = ['january','July','march','augest'];
console.log(start);
start[0]=start[1];
start[1]="june";
console.log(start);
//we can use unshift();



//method 2)returning index
let cars=["BMW M5", "Audi r8", "xuv 700","wagnor","porsce"];
console.log(cars.indexOf("BMW M5"));
console.log(cars.indexOf("BMW "));//if not found -1

//method 3)includes: searches for and return true if available
console.log(cars.includes("Audi r8"));//true
console.log(cars.includes("Audi r5"));//false

let cars2=["Toyota","swift","fortuner"];


//method 4)concatiation merging 2 array
console.log(cars.concat(cars2));//no changes are done in original
let newcar=cars.concat(cars2);//we have to create new object to store
console.log(cars);



//method 5)reverse 
cars.reverse();//changes are done in original array
console.log(cars);

//method slicing 
console.log("array slicing is started");
console.log(cars.slice());//returns all array
console.log(cars.slice(3));//gives all element from index 3
console.log(cars.slice(2,5));//ending index not included

console.log(cars.slice(-2));//negative index

//it will return empty array in case if size out of length
console.log(cars.slice(cars.length));


//method splice
console.log('Method splicing:');

cars.splice(4);//delete all elements from index 3
cars.splice(2,2)//go to index 2 and delete 2 elements

cars.splice(0,0,"Newcar1","Newcar2");//go to index 0 delete 0 and add 2 cars

cars.splice(cars.length,0,"Bmw m5 v12");
console.log(cars);




//pratice question
let start1 = ['January','july','march','augest'];
start1.splice(0,2,"july","june");
console.log(start1);

//question 2


let que2 = ['c','c++,html','js','python','java','c#','sql'];
console.log(que2.reverse().indexOf("js"));

//array reference
console.log("array reference");
let arr_ori=[1,2,3,4];
let arr_copy=arr_ori;//changes madhe in copy will be reflected in original 
arr_ori.push(7);//viceversa
console.log(arr_copy);

//array constant i.e only name is constant
const new__arr=[1,2,3,4,5];
//we cannot redeclare it




//nested array = array of array
console.log("array of array");

let nums=[[0,1],[2,3,4],[1,2]];
console.log(nums);
console.log(nums[1]);//accessing paarticular array
console.log(nums[1][1]);//accessing paarticular array 


//pratice question

let last_ques = [["*",null,"o"],[null,"x",null],["o",null,"x"]];

last_ques[0][1]="0";


























