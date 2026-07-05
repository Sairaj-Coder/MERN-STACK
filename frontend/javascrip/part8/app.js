console.log("Message connected");
console.log("Hello sir");
//arra methods

//for each works for each elemnt 

//1) arr.foreach(function defination or name); 
console.log("foreach function");
let arr = [9, 8, 3, 6, 0, 0, 4, 10, 0, 0, 0, 1];
function print(ele) {
    console.log(ele);

};

//arr.forEach(print);

function sortt(ele) {

    for (let i = ele.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (ele[j] <= ele[j + 1]) {
                let temp = ele[j];
                ele[j] = ele[j + 1];
                ele[j + 1] = temp;
            }
        }

    }

}
sortt(arr);
//arr.forEach(print);

//we can use function directly in it
let x = 0;
arr.forEach((ele) => {
    x++;
})
//print(`Total elements in arr ${x}`);



//we use for each for object also


let student = [{//array object
    name: "sairaj",
    age: 20,
    marks: 95
}, {
    name: "kartik",
    age: 20,
    marks: 98
},
{
    name: "vivek",
    age: 20,
    marks: 91

}
];
student.forEach((ele) => {
    //console.log(ele.name);


});



//commenting some partt with /// above
//part 2: Map same work like old function but returns
//new array every time

console.log("Map");
let num = [1, 2, 3, 4];

let double = num.map(function dou(ele) {
    return ele * 2;//if we didn't return still new array will form

});//new value is stored into double array

double.forEach((ele) => {
    console.log(ele);

})

// now question is we are creating array for each student gpa
let gpa = student.map((ele) => {
    return ele.marks / 10;
})
gpa.forEach((ele) => {
    console.log(ele);

})

//filter = callback true element is store in new array

console.log("filter function");

let newarr = [3, 5, 2, 4, 5, 3, 2, 2];

let two = newarr.filter((ele) => {//store only 2
    if (ele == 2) {
        return ele;
    }
    else {
        return false;
    }
})

//every function
console.log("Every function");
let t = [1, 2, 3, 4];
let value = ((ele) => {
    return ele % 2 == 0;
})
console.log(value());

//return 
console.log("reduce function");
let ary = [11, 4, 2, 1, 4, 100, 0, 2];
let single_value = ary.reduce((res, ele) => {




    return res + ele;
});
console.log(single_value);
//find maximum
let largevalue = ary.reduce((max, ele) => {
    if (max < ele) {
        return ele;

    }
    else {
        console.log("The maximum=",max);

        return max;
    }

})
console.log(largevalue);




























