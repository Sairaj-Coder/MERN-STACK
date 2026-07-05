const { faker } = require('@faker-js/faker');

let fakedata = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    // avatar: faker.image.avatar(),
    password: faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
  };
}


const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',

  database: 'delta_app',
  password: 'root123'
});
// try{
//     connection.query("show tables ",(err,result)=>{
//     if(err) throw err
//     console.log(result);
// });
// }
//     catch(err){
//         console.log(err);
// }
// let q="truncate table user"//this is to see ,create and delete table or database
// connection.query(q,(err,result)=>{
//     console.log(result);
//     console.log(result.length);//result is in array format
//     connection.end();

// })
// inserting multiple data 
// let insert="insert into user (id ,username ,email,password) values ? "
// let users = [[fakedata().userId,fakedata().username,fakedata().email,fakedata().password],[fakedata().userId,fakedata().username,fakedata().email,fakedata().password],[fakedata().userId,fakedata().username,fakedata().email,fakedata().password],[fakedata().userId,fakedata().username,fakedata().email,fakedata().password]];
// connection.query(insert,[users],(err,res)=>{
//     if(!err){
//     console.log(res);
//     }
//     connection.end();
// })


//we are going to use faker to insert 100st of data in sql 

for (let i = 0; i < 100 ; i++) {
    insertdata();

}
connection.end();
function insertdata(){
    let insert="insert into user (id ,username ,email,password) values (?, ?, ?, ?) ";
    let users = [fakedata().userId, fakedata().username, fakedata().email,  fakedata().password];

    connection.query(insert,users,(err,res)=>{
    if(!err)
    {

    console.log("successful");


    }
    else{
        console.log("fail");
    }

})
}
/*Insert in bulk is remaining */














