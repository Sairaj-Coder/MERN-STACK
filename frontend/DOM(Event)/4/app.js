let p=document.querySelector('p');
p.addEventListener('click',()=>{
    alert('Paragraph selected');
});

let d=document.querySelector('div');
d.addEventListener('mouseenter',function(){
    d.innerText="Hello sir this is div";
    d.style.borderRadius='50%';
});

//understanding redundancy with this keyword
let h1=document.querySelector('h1');
let h2=document.querySelector('h2');
let h3=document.querySelector('h3');

//
function sele(){
    this.style.backgroundColor="blue";
}
h1.addEventListener('mouseenter',sele);
h2.addEventListener('mouseenter',sele);
h3.addEventListener('mouseenter',sele);



