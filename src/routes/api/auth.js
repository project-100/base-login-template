import express from "express"
const router = express.Router()

router.get('/',(req,res)=>{
    res.end("authentication page")
});

module.exports=router