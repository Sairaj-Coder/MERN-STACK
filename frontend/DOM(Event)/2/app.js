console.log('Hi sir I am connected');
let btn=document.querySelector("button");
btn.onclick = function(){
    btn.classList.add("background");
    alert("Color was change");
    console.log("Hi sir");
};

let btns=document.querySelectorAll('button');
console.dir(btns);//its in array format

for (let i = 1; i< btns.length-1; i++) {
    btns[i].onclick=like;
    
    
}
function like(){
    alert('I love you');
};


let btn2=document.querySelector('.btnend');
btn2.onmouseenter=function(){
    prompt('You are in my area');
}









