console.log('connected sir')
/*
Try out the following events in EventListener on your 
own:-mouseout 
-keypress-
Scroll
-load
*/
let ul = document.querySelector('.list');
ul.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = "red";
    setTimeout(() => {
        event.target.style.backgroundColor = "";
    }, 500);

})
/*
Create a button on the page using JavaScript . 
Add an event listener to the button that changes the button's 
color to green when its click;
*/
let btn = document.createElement('button');
btn.innerText = "Click me";
let body = document.querySelector('body');
body.append(btn);


btn.addEventListener('click', function (event) {
    btn.style.backgroundColor = "green";

});

/*

Qs3.Create an input element on the page with a placeholder ”enter your name” 
and an H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s 
name so it should only input letters from a-z,
A-Z and space
(all other characters should not be detected ).
Whenever the user inputs their name ,
their input should be dynamically
visible inside the heading.
[Please note that noother character
apart from the allowed characters should be 
visible in the heading]

*/

let inp = document.createElement('input');
inp.placeholder = "Enter you name";
body.insertAdjacentElement('afterend', inp);

let h2 = document.createElement('h2');
h2.innerText = "hello";
body.insertAdjacentElement('afterend', h2);


// inp.addEventListener('keyup', function (event) {
//     let count = 0;
//     for (let i = 0; i < event.code.length; i++) {
//         event.code[i];
//         count++;
        

//     }
//     console.log(event.code ,'the count is',count);
//     // if (count > 4) {
//     //     inp.addEventListener('input', function () {
//     //         console.log(event.code);
//     //         h2.innerHTML = inp.value;
//     //     });

//     // }

// });
inp.addEventListener('input', function (event) {
            //console.log(event.code);
            h2.innerHTML = inp.value.replace(/[^a-zA-Z ]/g, "");
        });


























