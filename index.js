const express = require('express')
const app = express();

app.get("/",(req,res)=>{
res.json(
    {"message": "hello folks! Taufiq this side"}
)
})

app.get("/test",(req,res)=>{
    res.json({"message":"Hello"})
})

app.listen(8000,"0.0.0.0",()=>{
    console.log("started on port 8000")
})