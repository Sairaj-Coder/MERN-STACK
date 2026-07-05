console.log('connected');
let par=document.querySelector('p');
console.dir(par);
let inp=document.querySelector('input');

inp.addEventListener('change',function(){
    par.innerText=inp.value;
})