const express = require("express");
const path = require("path");
const hbs = require("hbs");
 

const app = express();
let port = process.env.PORT || 8000; 

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/images")));
app.use(express.static(path.join(__dirname, "/images/favicon")));
 
// hbs.registerPartials(path.join(__dirname, "../template/partials"));
hbs.registerPartials(path.join(__dirname, "/public/navigation&footer"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/course", (req, res) => {
    res.render("course");
});
app.get("/blog", (req, res) => {
    res.render("blog");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("*", (req, res) => {
    res.render("404");
});

app.get("/*", (req, res) => {
    res.render("404");
});

app.get("/about/*", (req, res) => {
    res.render("404");
});
app.get("/course/*", (req, res) => {
    res.render("404");
});
app.get("/blog/*", (req, res) => {
    res.render("404");
});
app.get("/contact/*", (req, res) => {
    res.render("404");
});



app.listen(port, () => {
    console.log("started");
});