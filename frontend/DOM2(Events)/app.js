console.log('good morning sir');

let div=document.querySelector('div');
let ul=document.querySelector('ul');
let li=document.querySelector('li');
function click(event){
    //console.dir(event.target);
   // console.log('This is 1st function');
}
div.addEventListener('click',click);
ul.addEventListener('click',click);
li.addEventListener('click',click);
//now everytime when ever we are clicking on any child elemnt
//parent elemnt gets trigger to stop that we 
//type=event.stopPropagation();
function stop(event){
    //event.stopPropagation();
    console.log('single element is click');
}
div.addEventListener('click',stop);
ul.addEventListener('click',stop);
li.addEventListener('click',stop);