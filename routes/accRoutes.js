const acc=require('../query')
const express=require('express')
const router=express.Router()

router.get('/AccData',async (req,res)=>{
     const data= await acc.accData()
    console.log(data)
    res.send(data)
})  


router.post('/getdetails', async(req,res)=>{
    console.log("hi")
    console.log(req.body)
    const data= await acc.getdetails(req.body.name,req.body.password)
    console.log(data)
    if(data.length>0)
    {   
        console.log("sss")
        res.status(200)
       res.send("Hello")
    } 
    else{
        console.log("nooo")
        res.status(400)
        res.send("Failure")
      
    }
})


router.post('/as', async(res,resp)=>{
    const data= await acc.gettingacount(res.body.name,res.body.password)
    console.log("data")
    if(data.length!=0){
        resp.status(200)
        resp.send("success")
    } 
    else{
        resp.send("noooo")
    }
})









module.exports=router