const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
const mysql = require('mysql2');
var methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',

    database: 'delta_app',
    password: 'root123'
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
//method
app.use(methodOverride('_method'))
//parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//



app.listen(port, (req, res) => {
    console.log("Boss ready");
})
// to see total user
app.get("/", (req, res) => {
    let q = "select count(*) from user";
    try {
        connection.query(q, (err, resu) => {
            if (err) throw err;
            let total = resu[0]["count(*)"];
            res.render("home.ejs", { total });
        })

    } catch (err) {
        console.log(err);
    }

})
//to see id,username,email
app.get('/users', (req, res) => {//no need to write connection.end()
    //because when this route finish connection will also finish
    let q = "select id,email,username from user";
    try {
        connection.query(q, (err, resu) => {
            if (err) throw err;
            let total = resu;
            // res.send(total);
            // console.log(total);
            res.render("user.ejs", { total });
            // res.redirect("/");
        })

    } catch (err) {
        console.log(err);
    }


})
//to delete user/id
app.delete('/users/:id', (req, res) => {
    // res.send("i am getting request");
    let { id } = req.params;

    let q = `delete from user where id='${id}'`;//uuid is always in string
    //    res.send(q);
    try {
        connection.query(q, (err, resu) => {
            if (err) throw err;
            res.redirect('/');
        })

    } catch (err) {
        res.send("err");
        console.log(err);
    }
})
//adding new data
app.get("/users/add", (req, res) => {
    let id = uuidv4();
    res.render('add.ejs', { id });
})
app.post("/users", (req, res) => {

    let newdata = req.body;
    // console.log(req.body);
    let q = `INSERT INTO user (id, username, email, password)
    VALUES (? , ?, ?, ?)`;
    let data = [newdata.id, newdata.username, newdata.email, newdata.password];
    try {
        connection.query(q, data, (err, resu) => {
        if (err) throw err;
            res.redirect('/users');
        })

    } catch (err) {
        res.send("err");
        console.log(err);
    }


})
/*action="/" in the form tells the browser:

“Send this form data to the / route.”

And app.post("/") in Express.js means:

“Handle POST requests coming to /.”

So both / must match. */

//edit user
app.patch("/users/read/:id", (req, res) => {
    let name = req.body.username;
    let email = req.body.email;//req.body.id Comes from form input.
    let { id } = req.params;//req.params.id Comes from URL
    let password = req.body.password;
    let pass = req.body.pass;
    console.log(req.body);
    if (password === pass) {
        let q = `update user set username= '${name}', email='${email}' 
    where id='${id}'`;
        try {
            connection.query(q, (err, resu) => {
                if (err) throw err;
                res.redirect("/users");
            })
        }
        catch (err) {
            res.redirect("home.ejs");
        }

    }
    else{
        res.send(`<h1>Wrong password</h1> <br>
            <a href="http://localhost:5000/users">SEE HOME PAGE</a>
            
            
            `);
    }
}
)
app.get("/users/read/:id/edits", (req, res) => {
    // res.send("i am reading");
    let { id } = req.params;
    let q = `select id,email,username,password from user where id = '${id}'`;
    try {
        connection.query(q, (err, resu) => {
            if (err) throw err;
            let users = resu[0];

            console.log(users);
            res.render('edits.ejs', { users });
            // res.redirect("/");
        })

    } catch (err) {
        console.log(err);

        res.send("wrong password");
    }


})
//see user in details
app.get('/users/read/:id',(req,res)=>{
    // res.send("read request recevie");
    let {id}=req.params; 
    let q = `select id,email,username,password from user where id = '${id}'`;
    try {
        connection.query(q, (err, resu) => {
            if (err) throw err;
            let users = resu[0];

            console.log(users);
            res.render('read.ejs', { users });
            
        })

    } catch (err) {
        console.log(err);

        res.send("wrong password");
    }

})