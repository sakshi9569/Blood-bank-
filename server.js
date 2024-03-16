const express=require("express");
//rest object
const app=express();
//ROUTE
//1 TEST ROUTE
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"welcome to blood bank app"
    })
})
//port 
const PORT=8080;
//listen
app.listen(PORT,()=>{
    console.log("NODE SERVER IS RUNNIG");
})

