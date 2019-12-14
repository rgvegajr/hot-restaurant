const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const reservedTable = [{
    name: "yoda",
    email: "yoda@sw.com",
    id: 1,
    phone: 3051234567
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/main.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "public/reserve.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(reservedTable);
  });

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});