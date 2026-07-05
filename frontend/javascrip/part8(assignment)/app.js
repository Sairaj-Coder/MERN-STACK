console.log("good morning sir");

let array=[10,20 ,30,40,-1];
let divisble=array.every((ele)=>{
    return ele%10==0;

})
console.log(divisble);


//

let mini = array.reduce((min,ele)=>{
    if(ele>min){
        return min;
    }
    else{
        return ele;
    }
})
console.log(mini);

//Square and sum the array elements using the arrow function and then find the average of the array
let arr=[1,2,3,5,4];
let average =((arr)=>{
    let sum=0;
    
    for(let i=0;i<arr.length;i++){
        sum=sum + (arr[i]*arr[i]);
    
    }
    return (sum/arr.length);
})
console.log(`The average is = ${average(arr)}`);

//=>using map function and reduce
let newarr=arr.map((ele) => {
    return ele*ele;
})
let avg=newarr.reduce((res,ele)=>{
   // console.log(`The value of res ${res} and ele ${ele}`);
    return res+ele;

});
console.log(`The average is = ${avg/arr.length}`);

//Create a new array using the map function whose each element is
//equal to the original element plus 5
let double=arr.map((ele)=>ele+5);
console.log(...double);


// Create a new array whose elements are in uppercase 
// of words present in the original array.
let nam=["SAIRAJ","samruddhi","Shirole"];
let newname = nam.map((ele)=>{
    return ele.toUpperCase();
})
newname.forEach((ele)=>{
    console.log(ele);
})

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with 
// the original array values and all of the additional 
// arguments doubled.
function doubleAndReturnArgs(arr,...args){
    let newarr=args.map(function args(ele){
        return ele*ele;
    })
    
    let arr2=[...arr,...newarr];
    return arr2;
}
let x= doubleAndReturnArgs([1],4,6);
console.log(x);

//. Write a function called mergeObjects that accepts two objects and returns a new
//  object which contains all the keys and values of the first object and second object
function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}
data1 ={
    name:'sairaj'
}
data2 = {
    rollno:62
}
console.log(mergeObjects(data1,data2));



























