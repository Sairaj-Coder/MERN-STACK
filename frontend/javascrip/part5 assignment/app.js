//qs1.Create a program that generates a random number representing a dice roll.
let dice=Math.floor(Math.random()*6)+1;
console.log(`the dice value of roll ${dice}`);

//Create an object representing a car that stores 
// the following properties for the car:name,model,color.
// Print the car’s name
 let car ={
    name:'BMW',
    model:'M5 v12',
    color:'Dark Blue'
 };
 console.log(`The name of car is ${car.name}`);


//Create an object Person with their name , age and city.Edit their city’s original
// value to change it to “NewYork” .Add a new property country and set it to the United States 
let person = {
    name:'Sairaj',
    age:20,
    city:"Pune"
};
person.city="New York";
person.country = "India";
console.log(person);