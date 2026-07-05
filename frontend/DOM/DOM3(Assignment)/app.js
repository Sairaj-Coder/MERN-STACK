console.log("Connected");
//Qs1.Create a new input and button element on the page 
//using JavaScript only. Set the text of button to“Clickme”
let input=document.createElement('input');
input.placeholder="Enter data";
let bod=document.querySelector('body');
bod.append(input);



let btn=document.createElement('button');
btn.innerHTML=`<br> click me`;
bod=document.querySelector('body');
bod.insertAdjacentElement('afterend',btn);



//Qs2. Add following attributes to the element :
// Change placeholder value of input to “username”
//Change the id of button to “btn”
input.placeholder="Username";
console.log(btn.getAttribute('id'));
btn.setAttribute('id','btn');
console.log(btn.getAttribute('id'));

//Qs3.Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.

btn=document.querySelector('#btn');
btn.classList.add("background");
btn.style.color="white";

//Create an h1 element on the page and set its text to “DOM Practice” underlined.
//Change its color to purple.
let h1=document.createElement('h1');
h1.innerHTML=`DOM Pratice`;
h1.classList.add("dom");
document.querySelector('body').prepend(h1);



//Create a p tag on the page and set its text to “Apna College Delta Practice”,
//where Delta is bold.
let p=document.createElement("p");
p.innerHTML=`<b>Apna College Delta Practice</b>`;
document.querySelector('body').append(p); 














