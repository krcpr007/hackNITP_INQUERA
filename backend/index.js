const express= require('express'); 
const app= express(); 

app.get('/', async(req,resp)=>{
    resp.send("backend is working "); 
})


app.listen(5000); 