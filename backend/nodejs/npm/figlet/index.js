// import figlet from "figlet";

// async function doStuff() {
//   const text = await figlet.text("Sairaj Shirole!!");
//   console.log(text);
// }

// doStuff();


const figlet = require('figlet');

figlet("Sairaj", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});