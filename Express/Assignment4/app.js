const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
mongoose.connect("mongodb://localhost/users");
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async function(req, res) {
    const users = await User.find();

    res.render("home.ejs", { users });
});
app.post("/user/add", async function(req, res) {
    console.log(req.body);
    await User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city,
        profession: req.body.profession,
        selected: req.body.selected,
    });
    res.redirect("/");
});
app.get('/form', function (req, res) {
    res.render('form.ejs');
  });
app.get("/user/:id/complete", async function(req, res) {
    console.log("markcomplete", req.params.id);
    await User.updateOne({ _id: req.params.id }, {
            selected: true,
        }),
        res.redirect("/");
});
app.get("/user/:id/delete", async function(req, res) {
    console.log("deleted", req.params.id);
    await User.deleteOne({ _id: req.params.id }), res.redirect("/");
});

app.listen(5000, () => console.log("server listening on port 5000"));