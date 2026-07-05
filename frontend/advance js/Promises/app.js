console.log("connected");

function savetodbs(data) {

    return new Promise((resolve, reject) => {
        let internetspeed = Math.ceil(Math.random() * 10) + 1;
        if (internetspeed > 5) {
            resolve("data was successfully saved");

        }
        else {
            reject("Low internet speed");
        }
    })

}
//then and catch in promises

console.log(savetodbs("Sairaj"));
savetodbs("Akshay")
    .then(() => {
        console.log("Data saved");
        //console.log(Request);
    })
    .catch(() => {
        console.log("Data storing failed trying again");
        // savetodbs("Akshay");
    })



//promise chaining
savetodbs("Shaila")
    .then((result) => {
        console.log("data 1 saved", result);

        return savetodbs("hello world");
    })
    .then((result) => {
        console.log("data2 saved", result);
        return savetodbs("hamala");
    })
    .then((result) => {
        console.log("data3 saved", result);

    })
    .catch((error) => {
        console.log("data storing fails", error);
    })
//results and error
/*Refactoring code with the help of promises for color hell */

let h1 = document.querySelector('h1');

function changecolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changes");
        }, delay);
    })
}
changecolor("red",1000)
.then(()=>{
    console.log('color changee 1');
    return changecolor("blue",1000);
    
})
.then(()=>{
    console.log('color changee 2');
    return changecolor("green",1000);
    
})
.then((result)=>{
    //console.log(Promise.PromiseState);
    console.log('color changee 3');
    return changecolor("black",5000);
    
})
.catch(()=>{
    console.log('error');
})

async function greet(){
    
    return "Hello sir i am jarvis this is asynchronous function";
            
    
}
greet()
.then((result)=>{
    console.log("Data was successfully printed");
    console.log(result);
   
})
.catch((error)=>{
    console.log("Data was not successfully printed");
    console.log(error);
    
})









