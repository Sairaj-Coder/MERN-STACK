console.log("test1");
let url = "http://universities.hipolabs.com/search?name=";

let ul = document.querySelector("ul");
let btn = document.querySelector("button");
console.log(ul.value);

btn.addEventListener("click",async ()=>{

       name();
    
});

async function name() {
    let data = await college();
    ul.innerHTML = "";//here we are emptying all the list
    for(let i=0 ;i<data.length ; i++){
        // console.log(data[i]["name"]);
        // console.log(data[i]["state-province"]);
        let li=document.createElement("li");
        li.innerText=data[i]["name"];
        ul.appendChild(li);

    }

}

async function college() {
    try {
        let country = document.querySelector("#inp").value;
        console.log(country)
        let data = await axios.get(url + country);
        return data["data"];
    }
    catch (error) {
        console.log("error", error);
    }
}
