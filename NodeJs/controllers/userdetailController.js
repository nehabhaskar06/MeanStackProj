const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
var { Userdetail }= require('../models/userdetail');
   

router.get('/',(req,res)=>{
    Userdetail.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving userDetails :' + JSON.stringify(err,undefined,2))}
    })
})

router.get('/mobnumber',(req,res)=>{
             Userdetail.find({mobnumber:req.query.mobnumber},(err,docs)=>{
                if(!err){res.send(docs);}
                else{console.log('Error')}
            })
        })
        

router.get('/:id',(req,res)=>{
 if(!ObjectId.isValid(req.params['id']))
return res.status(400).send(`no`)
Userdetail.findById(req.params.id,(err, doc) =>{
    if(!err){res.send(doc)}
    else{console.log('Error in Retriving user :' + JSON.stringify(err,undefined,2))}
})

})

router.post('/',(req,res)=>{
    var user= new Userdetail({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        address:  req.body.address,
        mobnumber:  req.body.mobnumber,
        email:  req.body.email,
        paasword: req.body.paasword
    })
    user.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in save')}
    })
})


router.put('/:id',(req,res)=>{
      if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`)

    var user={
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender, 
        address:  req.body.address,
        mobnumber:  req.body.mobnumber,
        email:  req.body.email,
        paasword: req.body.password,      
    }
    Userdetail.findByIdAndUpdate(req.params.id,{ $set:user}, {new:true},(err, doc) =>{
        if(!err){res.send(doc)}
        else{console.log('Error in User Update :' + JSON.stringify(err,undefined,2))}
    });
   
    });

    router.delete('/:id', (req,res)=>{
        if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`)

    Userdetail.findByIdAndRemove(req.params.id,(err, doc) =>{
        if(!err){res.send(doc)}
        else{console.log('Error in User Delete :' + JSON.stringify(err,undefined,2))}
    });
    
    
    })

module.exports=router;