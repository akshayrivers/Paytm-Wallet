const express = require("express");
const routes=require('./routes/routes');
const account= require('./routes/account')
const cors= require("cors");
const app= express();
app.use(express.json());
app.use(cors());
app.use('/api/v1',routes);
app.use('/api/v1',account)
app.listen(3000,()=>{
    console.log("listening on 3000");
})
