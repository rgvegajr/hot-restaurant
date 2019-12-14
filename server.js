const express = require("express");
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");

//user should edit and save the following database connection code with appropriate host,port,user,password, and database specifics
const connection = mysql.createConnection({ //creatConnection function takes in object with host, port, un, pw, db name, etc
    host: "localhost", //url where databse lives
    // your port; if not 3306
    port: 3306,
    // your username
    user: "root",
    //yourpassword
    password: "password1234",
    database: "reservations_db"
});

function afterConnection() {
    connection.query("SELECT * FROM tables", function(err, res) {
        if (err) throw err;
        console.table(res);
    });
}

//establish connection and call functions
connection.connect(function(err) { //before calling any other functions to query database, etc, must ensure a connection
    if (err) throw err;
    afterConnection();
});

const app = express();
const PORT = 3000;

const reservedTable = [{
    name: "yoda",
    email: "yoda@sw.com",
    id: 1,
    phone: 3051234567
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(reservedTable);
});

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});