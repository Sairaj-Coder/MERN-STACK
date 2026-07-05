//change anchor tag color
let box=document.querySelectorAll(".boxLink");
for(let i=0;i<box.length;i++){//inline style
    box[i].style.color="red";
}
//

console.log("Manipulating style 1");
let newval=document.querySelectorAll("p");
//newval.style.color="blue";
console.log(newval[0].classList);//no value
console.log(newval[0].classList.add("hello"));
console.log(newval[0].classList);


//console.log(newval);


let img=document.querySelector("img");
let previous=img.previousElementSibling;
previous.style.color="blue";
previous.style.backgroundColor="red";



//adding element
let newp=document.createElement("ol");

newp.innerHTML=`<li type="A">mango</li>
<li type="A">Pineapple</li>

`;

box=document.querySelector(".box");

box.appendChild(newp);

newp.append(`Hello this is added text`);


//now insertAdjacentElement(where,element);
let btn=document.createElement("button");
btn.innerHTML=`<b>insertAdjacent button</b>`;
let p=document.querySelector("p");

p.insertAdjacentElement('beforebegin',btn);
p.insertAdjacentElement('beforeend',btn);
p.insertAdjacentElement('afterbegin',btn);
p.insertAdjacentElement('afterend',btn);
p.insertAdjacentElement('beforebegin',btn);

btn.remove();




//add the following elements to container using only javascript
//and dom method
/*
1) a <p> with red text that says "Hey I'm red!";
2) an h3 with blue text that says "I'm a blue h3"
3)a <div> with a blackborder and pink background color 
with the following elements inside of it
a)annchor tag <h1> that says I'm in a div
b)a <p> that says "Me too!"

*/ 

let par=document.createElement("p");
par.innerHTML="Hey I'm red!";
par.style.backgroundColor="red";
par.style.height="50px";
par.style.width="150px";
let h2=document.querySelector("h2");
h2.insertAdjacentElement('afterend',par);

//2)
let h3 = document.createElement('h3');
h3.innerHTML = "I'm a blue h3";
h3.style.backgroundColor="blue";

let np = document.querySelector('p');
np.insertAdjacentElement("afterend",h3);

//3)
let div=document.createElement('div');
div.style.background="pink";
div.style.border="2px solid black";
div.innerHTML=`<h1><a href='www.google.com'>I'm in a 
div</a></h1> </br> <p>Me too!</p>`;

box=document.querySelector('.box');
box.insertAdjacentElement('afterend',div);

