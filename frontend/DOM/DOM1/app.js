//select element by id
//syntax=getElementById("");






//select element by class

let img=document.getElementsByClassName('oldImg');
console.log(img);
for(let i=0;i<img.length;i++){
    img[i].src="assets/spiderman_img.png";
    console.log(`The value of img changes ${i}`);
}


//select the element by tag name
//syntax=getElementByTagName
//returns the element as an html collection 
//or empty collection(if not found)

let par=document.getElementsByTagName("p");
console.log(par);   
setTimeout(()=>{
    par[0].innerText="Hello sir I am Jarvis";   
},10000);


// console.log(`The paragraph tag is selected : ${p}`);

let p=document.querySelectorAll("p");
p[1].innerText="Sairaj SHiroel";   

let h=document.querySelector("h1");
h.innerText="Iron man";