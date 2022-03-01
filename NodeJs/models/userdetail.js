const mongoose= require('mongoose');

var Schema = mongoose.Schema;

var Userdetail = new Schema({
      name: {type :String},
      age: {type :Number},
      gender: {type :String},
      address:  {type :String},
    mobnumber:  {type :Number},
    email:  {type :String},
    paasword:  {type :Number}
   
  });


  var Userdetail = mongoose.model('Userdetail', Userdetail );
   

// var Userdetail= mongoose.model('Userdetail',{
//     name: {type :String},
//     age: {type :Number},
//     gender: {type :String},
//     address:  {type :String},
//   mobnumber:  {type :Number},
//   email:  {type :String},
//   paasword:  {type :Number}
 
// })
module.exports={Userdetail};
