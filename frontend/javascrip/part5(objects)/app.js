console.log("Message Connected");
const std ={//note we can use let keyword also
    name:"Sairaj",
    age:20,
    roll:23
};
console.log(`This is way to print ob-literal`);//now here we are accessing whole dictonary/object-literal
console.log(std);
//now accessing particular part with key
console.log(std.name, std.age);
//declaring array in object
let student ={
    name:"sairaj",
    color_favorite :["russian-pink",'american-white','thailand-skin'],
    bestfreid:'rutik'
};
//now here main part is to access array and its elements
//dot-operator
console.log(student.color_favorite);
//accessing particular color
console.log(student.color_favorite[1]);

let post={
    username:"sairaj",
    content:"Unavilable",
    likes:50,
    repost:20,
    tags:["mescoe","apna-college","mom"]
};
console.log(post["tags"]);
console.log(post["tags"][1]);
//some benefits of this way
let pro="tags";
console.log(post[pro]);



//javascript automatically convert all the key in string
//doesn't matter it is keyword or not
//ex
let dic={
    1:'a',
    2:'b',
    null:'c',
    true:'d'
};
console.log(dic[1]);//here one automatically conert into string 

//add or update
let myself={
    name:'sairaj',
    city:'pune',
    arr:['a','b','c'],
    marks:0
};
//changing value
myself.name="Sairaj Shirole";
console.log(myself);
myself["city"]="Sangamner";
console.log(myself);
//modiying array
myself.arr[0]='s';
console.log(myself);

//adding value
myself.gender="male";
console.log(myself);

//deleting value
delete myself.marks
console.log(myself);


//nested object literal

let info = {
    aman:{
        grade:'a',
        city:'pune'
    },
    sairaj : {
        grade:'b',
        city:'nashik'

    },
    color:{
        type :['red','yello','blue'],
    }
        //no comma at the end

};
//accesing
console.log(info);
console.log(info.sairaj);
console.log(info.sairaj.grade);
console.log(info.color.type);
console.log(info.color.type[0]);
//same way to add
info.rohan="c";




//array of object it follow index

let classinfor = [
    {
        name:'Sairaj',
        grade:'A+'
    },
    {
        name:"arshiya",
        grade:'a+++'

    },
    {
        name:'vivek',
        grade:'b'
    }

];

console.log(classinfor);//access whole array
console.log(classinfor[1])//accessing first object via index
console.log(classinfor[2].name);//accessing name


//updating
classinfor[1].gender="female";
classinfor[3]='rohan';

console.log(classinfor);























