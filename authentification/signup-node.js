const express = require ('express')
var Cloudant = require('@cloudant/cloudant');
var username = "ebbdd9a3-4b51-43ce-92d9-7c5d62d821c7-bluemix";
var password = "b4b2b5443239a786c471c7780f219aab64bd843b6f3de8bd34b48c1065b41ce4";
var cloudant = Cloudant({ account:username, password:password });
const app = express();
const cors = require("cors");
app.use(cors());
var bodyParser=require("body-parser");





  app.listen(4500,()=>{
    console.log("Running Order Service on 4500");
  })
