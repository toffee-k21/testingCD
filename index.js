const express = require('express')
const app = express();

app.get("/",(req,res)=>{
res.json(
    {"message": "hello folks!"}
)
})

app.get("/test",(req,res)=>{
    res.send("<html><body><h1>Hello</h1></body></html>")
})

app.listen(8000,"0.0.0.0",()=>{
    console.log("started on port 8000")
})