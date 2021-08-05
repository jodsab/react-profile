const express = require('express');
const app = express();

const path = require('path');

const PORT = process.env.PORT;

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'views'))
})


app.listen(PORT,()=> console.log('server is starting port', PORT));