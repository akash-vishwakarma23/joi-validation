const express = require('express');
const app = express();
const {userModel, validateModel} = require('./models/user-model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res){
    res.send("Welcome");
})

app.post('/create', async function (req, res){
    let { username, name, email, age ,contact } = req.body;
    let error =  validateModel({username, name, email, age, contact})
    if(error) return res.status(500).send(error.message);

    res.send("all ok")
 })

app.listen(3000);