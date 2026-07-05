let r = Math.ceil((Math.random())*255);
let g = Math.ceil((Math.random())*255);
let b = Math.ceil((Math.random())*255);
// console.log(r);
// console.log(`the value of red = ${r} 
//     the value of green = ${g}
//     the value of blue s= ${b}`);
function color() {
    let r = Math.ceil((Math.random()) * 255);
    let g = Math.ceil((Math.random()) * 255);
    let b = Math.ceil((Math.random()) * 255);
    //console.log(`${r},${g},${b}`);
    return `rgb(${r},${g},${b})`;
}
//btn ka
let btn=document.querySelector('.btn');
btn.addEventListener('click',color);
btn.addEventListener('click',di);

//div ka sabkuch
function di(){
    div.style.backgroundColor=color();
    h1.innerHTML=`${color()}`;
};

let div=document.createElement('div');
div.style.width='500px';
div.style.height='500px';
div.style.margin='10%';
div.style.backgroundColor=color();
div.style.border=' 2px solid black';

document.querySelector('body').append(div);

//name ke age
let nam=document.querySelector('h1');
let h1=document.createElement('h1');
h1.innerHTML=`${color()}`;

nam.insertAdjacentElement('beforeend',h1);




