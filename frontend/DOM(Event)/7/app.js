
let form=document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    //alert('form submitted');
    
});

let user = document.querySelector('#name');
user.addEventListener('change',function(event){
   //event.preventDefault();
    alert(`changes in name ${user.value}`);
    console.log(user.value);
    
});
//console.dir(user);


let pass = document.querySelector('#pass');

pass.addEventListener('input',function(){
    // event.preventDefault();
    //alert(`changes in name ${pass.value}`);
    console.log(`change is =${pass.value}`);
    
});