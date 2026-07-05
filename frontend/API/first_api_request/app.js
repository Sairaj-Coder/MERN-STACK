let url = "https://catfact.ninja/fact";
/*1st way to fetch data */
fetch(url)

    .then((res) => {
        res.json()

            .then((result) => {

                console.log(result.fact);
            });

    })
    .catch((err) => {
        console.log(err);
    })
/*2nd way using  */

async function getfact() {
    try {
        let result = await fetch(url);
        let data = await result.json();
        console.log(data.fact);
    }
    catch(err){
        console.log("Error in api fetching");
    }
}

function start(){
    let id=setInterval(getfact,1000);
}

function clear(){
    clearInterval(id);
}
setTimeout(clear,10000);
start();