//write a program to remove num from array
console.log("Connected");
let num2 = 2;
let arr = [1, 2, 3, 4, 5, 6, 2, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num2) {
        arr.splice(i, 1);
    }
}
console.log(arr);
//write a program to find number of digit
let num3 = 2187152;

let x = 0;
while (num3 > 0) {
    x++;
    num3 = parseInt(num3 / 10);

}
console.log("The value of x=" + x);
//Write a JS program to find the sum of digits in a number.
let num4 = 25;
let y = 0;
while (num4 > 0) {
    y = y + (num4 % 10)
    num4 = parseInt(num4 / 10);
}
console.log(y);

//write number factorial
let num = 1;

for (let i = 5; i > 0; i--) {
    num = num * i;

}
console.log(`the factorial is ${num}`);

//find largest number in array
let arra = [4, 9, 28, 7, 2, 4];
let lar = arra[0];
for (let i = 1; i < arra.length; i++) {
    if(lar<=arra[i]){
        // let temp=lar;
        // lar=arra[i];
        // arra[i]=temp;
        lar=arra[i];

    }

}
console.log(lar);








