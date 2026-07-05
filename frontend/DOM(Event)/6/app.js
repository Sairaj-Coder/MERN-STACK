console.log('Test 5');
let form=document.querySelector('form');
console.log(form);
/* 
form.addEventListener('submit',function(event){
    //to prevent submit action
    event.preventDefault();
    alert('form is  submitted?');
});
*/
//extracting data from form

form.addEventListener('submit',ext2);


function extract(event){
    event.preventDefault();
    let name=document.querySelector('#name');
    let pass=document.querySelector('#pass');
    alert(`Your name is ${name.value} and you password is ${pass.value}`);

}
//form stores data in form of array so data redundancy can be used
function ext2(event){
    //let name=this.elements[0];
    //let pass=this.elements[1];
    //alert(`Your name is is ${name.value} and you password is ${pass.value}`);
    alert(`Your name is ${this.elements[0].value} and you password is ${this.elements[1].value}`);
}