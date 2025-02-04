const express = require('express')
const app = express();

app.get("/",(req,res)=>{
res.json(
    {"message": "hello folks!"}
)
})

app.listen(8000,"0.0.0.0",()=>{
    console.log("started on port 8000")
})