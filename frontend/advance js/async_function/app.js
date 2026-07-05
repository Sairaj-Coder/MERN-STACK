let h1 = document.querySelector("h1");

function changecolor(color, delay) {
    return new Promise((resolve) =>
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay)
    )

}

async function wait() {
    await changecolor("violet", 1000);
    await changecolor("red", 1000);
    await changecolor("green", 1000);
    await changecolor("blue", 1000);
    console.log("done");
}
wait()



