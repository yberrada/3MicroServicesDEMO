const express = require ('express')
var Cloudant = require('@cloudant/cloudant');
var username = "ebbdd9a3-4b51-43ce-92d9-7c5d62d821c7-bluemix";
var password = "b4b2b5443239a786c471c7780f219aab64bd843b6f3de8bd34b48c1065b41ce4";
var cloudant = Cloudant({ account:username, password:password });
const app = express();
const cors = require("cors");
app.use(cors());

// get bill due amount
app.get("/bill/:id",(req,res)=>{

  cloudant.use('bills').find({ selector: { _id:req.params._id } }, function(err, result) {
      if (err) {
        throw err;
      }
      for (var i = 0; i < result.docs.length; i++) {
      res.json(result.docs[i].Due);
        console.log(result);
    }
    });
  });
  // pay bill due amount
  app.get("/bill/pay/:id/:amount",(req,res)=>{

    cloudant.use('bills').find({ selector: { _id:req.params._id } }, function(err, result) {
        if (err) {
          throw err;
        }
        for (var i = 0; i < result.docs.length; i++) {
        var customer = {
           "_id": result.docs[i]._id,
           "_rev": result.docs[i]._rev,
           "LastName": result.docs[i].LastName,
           "Due": result.docs[i].Due-req.params.amount
        };
          console.log(result);
      }
      res.json(customer);
      cloudant.use('bills').insert(customer, function(err, body) {});
      });
    });
  app.listen(5000,()=>{
    console.log("Running Order Service on 5000");
  })
