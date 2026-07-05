console.log("test 1");
let jsonRes='{"message":"https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_712.jpg","status":"success"}';
let validResult=JSON.parse(jsonRes);
console.log(validResult);
console.log(validResult.message);

/*changing image*/ 
let url="https://dog.ceo/api/breed/hound/images/random"
let img=document.createElement("img");
let body=document.querySelector('body');
body.appendChild(img);

async function getimages() {
    try{
    let res=await fetch(url);
    let data=await res.json();
    img.src=data.message;
    }
    catch(err){
        alert("error:",err);
    }
    
}
function start(){
    let id=setInterval(getimages,1000);
}

function clear(){
    clearInterval(id);
}
setTimeout(clear,10000);
start();




/* */