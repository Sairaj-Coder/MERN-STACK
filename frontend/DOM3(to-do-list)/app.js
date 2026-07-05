console.log('connected');
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.createElement('ol');
let body = document.querySelector('body');
body.append(ul);

btn.addEventListener('click', function () {
    let li = document.createElement('li');
    //it will only show points only if
    //we append it inside ul 
    li.innerText = inp.value;
    ul.appendChild(li);
    

    //creating del button
    let del = document.createElement('button');
    del.innerText = "Delete";
    del.style.marginLeft = "20px";
    del.classList.add("delete")
    del.addEventListener('click',function(){//here we gave Immediate property to that button
        li.remove();
    })

    //appending child
    li.appendChild(del);
    


    inp.value = "";
  
})
ul.addEventListener('click',function(event){
    console.dir(event.target);
})



