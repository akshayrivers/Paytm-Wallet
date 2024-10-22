const { Router } = require("express")
const userRoutes= require('./user')
const account= require('./account')
const router = Router();


router.use('/user',userRoutes);
router.use('/account',account)
router.get('/',(req,res)=>{
    res.sendStatus(200).send("you are doing good");
})

module.exports= router;