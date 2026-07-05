console.log("test");
let url = " https://icanhazdadjoke.com/";
let config = {headers:{Accept:"text/plain"}};
async function data() {
    try{
        let res = await axios.get(url, config);
        console.log(res.data);
    }catch(e){
        return e;
    }
    
}
data();