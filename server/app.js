'use strict';
const express = require("express");
const cors = require("cors");
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors())

app.get('/',(req,res) => {
    res.send("Om Nahama Shiva")
})

app.get('/listOfProducts',(req,res)=>{
 try{
    let listOfProductsJson = fs.readFileSync("C:/Users/Hitesh Rajpal/Documents/Open Source Projects/fourniture-ui/server/mockData/Products.json");
    let listOfProducts = JSON.parse(listOfProductsJson);
    res.json(listOfProducts);
  
 } catch(e){
     console.log(e)
     res.status(500).send("Something went wrong please try again later")
 }
})

app.listen(port , ()=>{
    console.log("Welcome to node js server is running")
})