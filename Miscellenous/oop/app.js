console.log("hello sir");
//without constructor =>we have to tell which value is for which key or where to store
class person {
    name;
    age;
}
let p1 = new person();
p1.name = "Sairaj";
p1.age =25;
console.log(p1);

//with constructor
class student {
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    talk (){
        console.log(`welcome mr ${this.name}`);
    };
}
let s1 = new student("sairaj",25);
console.log(s1);
s1.talk();


