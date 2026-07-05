let inp=document.querySelector('input');

inp.addEventListener('keyup',function( event){
    console.log(`The press key was:${event.key}`);
    console.log(`The code of press key is:${event.code}`);
    if(event.key=='Escape'){
        alert('Fuck you dont run');
    }

});
