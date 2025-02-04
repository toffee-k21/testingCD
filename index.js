const express = require('express')
const app = express();

app.get("/",(req,res)=>{
res.json(
    {"message": "hello folks!"}
)
})

app.listen("0.0.0.0",8000,()=>{
    console.log("started on port 8000")
})