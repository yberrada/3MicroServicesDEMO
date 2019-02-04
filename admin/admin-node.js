const express = require ('express')
var Cloudant = require('@cloudant/cloudant');
var username = "ebbdd9a3-4b51-43ce-92d9-7c5d62d821c7-bluemix";
var password = "b4b2b5443239a786c471c7780f219aab64bd843b6f3de8bd34b48c1065b41ce4";
var cloudant = Cloudant({ account:username, password:password });
const app = express();
const cors = require("cors");
app.use(cors());
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use( bodyParser.json() );



app.put("/due",(req,res)=>{
  var user_name=req.body.user;
  var password=req.body.password;
  var due=req.body.amount;
  cloudant.use('users').find({ selector: { _id:"admin" } }, function(err, result) {
    if (err) {
      throw err
    }
    if(result.docs[0].password != password){
      res.json("Admin's password incorrect");
      return;

    }

  cloudant.use('users').find({ selector: { _id:req.body.user } }, function(err, result) {
    if (err || result.docs.length<1 ) {
      // throw err;
      res.json("User was not found");
      return;

    }
    cloudant.use('bills').find({ selector: { _id:req.body.user } }, function(err, result) {
      for (var i = 0; i < result.docs.length; i++) {
        var customer = {
          "_id": result.docs[i]._id,
          "_rev": result.docs[i]._rev,
          "LastName": result.docs[i].LastName,
          "Due": due
        };
      }
      res.json("Customer updated succesfully");
      cloudant.use('bills').insert(customer, (err, body)=>{
      });
    })
    console.log(result);
  });
});
});

app.listen(3000,()=>{
  console.log("Running Order Service on 3000");
})
