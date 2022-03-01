const express=require('express');
const bodyParser=require('body-parser');
const {mongoose}= require('./db.js');
const cors= require('cors')

var userdetailController= require('./controllers/userdetailController.js');
    


var app=express();
app.use(cors({origin:'http://localhost:4200'}));
app.use(bodyParser.json());
app.listen(3000, ()=>
    console.log('Server started at port : 3000')

)
app.use('/userdetails', userdetailController)