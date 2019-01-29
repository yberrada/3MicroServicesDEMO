const express = require ('express')
var Cloudant = require('@cloudant/cloudant');
var username = "ebbdd9a3-4b51-43ce-92d9-7c5d62d821c7-bluemix";
var password = "b4b2b5443239a786c471c7780f219aab64bd843b6f3de8bd34b48c1065b41ce4";
var cloudant = Cloudant({ account:username, password:password });
const app = express();
const cors = require("cors");
app.use(cors());
var bodyParser=require("body-parser");
var jwt = require('jsonwebtoken');
var expressValidator = require('express-validator');
app.use(expressValidator())
  var path = require('path');



app.use(bodyParser.urlencoded({
  extended: false
}));
app.use( bodyParser.json() );


app.post("/login",(req,res)=>{
   var user_name=req.body.user;
   var password=req.body.password;
   console.log(req.body);
   console.log("User name = "+user_name+", password is "+password);
   req.checkBody('user_name','Name is required').notEmpty();
   req.checkBody('password','Password is required').notEmpty();

   var errors = req.validationErrors();
   var message;

   // if(errors){
   //   console.log(errors);
   //   for(var i =0; i< errors.length;i++){
   //    message += errors[i].msg + ' ';
   // }
   // res.send(message);
   // }else{
   //   console.log('No errors')
   // }

  cloudant.use('users').find({ selector: { _id:user_name} }, function(err, result) {
      if (err) {
        throw err;
      }
      for (var i = 0; i < result.docs.length; i++) {
      if(result.docs[i].password ==password ){
        console.log(result);
        // res.send("Log in Successful");
        res.send(result);
        const token = jwt.sign({
          userId:user_name
        },
        'secret',
        {
          expiresIn:"1h"
        }
      );
      console.log(token);
      }
      else {
        res.send(result);
      }
    }
    });
  });


  app.post("/register",(req,res)=>{
     var user_name=req.body.user;
     var password=req.body.password;
     console.log(req.body);
     console.log("User name = "+user_name+", password is "+password);
     //////////
     cloudant.use('users').insert({ "_id":user_name, "password":password  }, req.params.id).then((data) => {
       console.log(data);
       res.send(data);
     }).catch((err) => {
       console.log(err.reason);
     });
    });

  app.listen(7000,()=>{
    console.log("Running Order Service on 7000");
  })
