var express = require('express');
const faker = require('faker');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

const users=[];

for(let i=1;i<5;i++){
    users.push({
        id:i,
        Name: faker.name.findName(),
        email:faker.internet.email(),
        age:faker.datatype.number(100),
        city:faker.address.city(), 
        profession:faker.name.jobType()
    }
    )
}console.log(users);

app.set('views','./views');
app.set('view engine','ejs');


app.get('/', function (req, res) {
  res.render('index.ejs',{users});
})
app.get('/user', function (req, res) {
    console.log(req.query);
    res.render('user.ejs',{Name:req.query.name,email:req.body.email,age:req.body.age,
        city:req.body.city,profession:req.body.profession});
});

app.get('/form', function (req, res) {
    res.render('form.ejs');
  });
app.post('/user/add', function (req, res) {
    console.log(req.body)
    users.push({
        Name:req.body.Name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city,
        profession:req.body.profession
    })
    res.redirect('/');
})
app.listen(4000,()=> console.log("listening to port 4000"));