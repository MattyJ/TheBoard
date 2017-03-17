var http = require("http");
var express = require("express")
var app = express();
var ejsEngine = require("ejs-locals");

// Setup the View Engine
//app.set("view engine", "jade")

//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // ejs view engine

app.set("view engine", "vash");

app.get("/", function (req, res)
{
    //res.render("jade/index", { title: "Express + Jade" });
    //res.render("ejs/index", { title: "Express + EJS" });
    res.render("index", { title: "Express + Vash" });
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Shawn", isValud: true, group: "Admin" });
});

var server = http.createServer(app);


server.listen(3000);
