require('dotenv').config();
const express = require('express');
const app = express();


const port = process.env.PORT || 5000;


app.listen(port,(req,res)=>{
console.log(`server is listening at port ${port}`)
})