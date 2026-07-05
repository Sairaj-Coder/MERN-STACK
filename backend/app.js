// console.log("test");
// // let id = setInterval(api,1000);
// function api(){
// let url= "https://catfact.ninja/fact";
// let fet =fetch(url)
// fet
// .then((res)=>{
//     return res.json();
    
// })
// .then((data)=>{

//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })
// }

//using async function name(params) {}

let url= "https://catfact.ninja/fact";
async function getfact() {
        let res= await fetch(url);
        let data = await res.json();
        console.log(data.fact);
}

// getfact();
// setInterval(getfact,2000);


