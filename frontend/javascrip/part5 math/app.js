let num=-12.5;
console.log(Math.floor(num));//round of to less than
console.log(Math.ceil(num));//round of to greater than
console.log(Math.pow(5,2));//gaves a**b
console.log(Math.abs(num));//convert to positive
console.log(Math.random());//generate any random num
//method chaining
let num2=Math.ceil(Math.abs(num));
console.log(num2);

//generate random integer
let num3=Math.ceil((Math.random())*10);
console.log(num3);

//que=> generate random number betn 1 and 100 
let num4=Math.ceil((Math.random())*100);
console.log(num4);

//que=> generate random number betn 1 and 5 
let num5=Math.ceil((Math.random())*5);
console.log(num5);

//que=>generate random number betn 21 to 25
let num6=Math.ceil((Math.random())*5)+20;
console.log(num6);
// generate bet 25 t0 30
let num7=Math.ceil((Math.random())*5)+25;
console.log(num7);



