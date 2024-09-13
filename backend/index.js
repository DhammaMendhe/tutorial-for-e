const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/data',(req,res)=>{

    res.sendFile(path.join(__dirname,'data.json'));
    // res.send("file send successfully");

    
})

app.listen(PORT ,()=>{
    console.log("listening to port",PORT)
})