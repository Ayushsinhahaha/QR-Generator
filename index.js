const express=require('express');
const app=express();
const ejs=require('ejs');
const path=require('path');
const port=process.env.port||3000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})