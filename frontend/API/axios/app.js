console.log("test");
let img = document.createElement("img");
let body = document.querySelector('body');




let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    console.log( getimages());
    console.log(await getimages());
    body.appendChild(img);
    img.src=await getimages();

});



async function getimages() {
    try {
        let res = await axios.get("https://dog.ceo/api/breed/hound/images/random");
        //console.log(res.data.message);

        return res.data.message;
    }
    catch (err) {
        // alert("error:", err);
        return "no Image";
    }

}
// getimages();
// function start() {
//     let id = setInterval(getimages, 1000);
// }

// function clear() {
//     clearInterval(id);
// }
// setTimeout(clear, 10000);
// start();



