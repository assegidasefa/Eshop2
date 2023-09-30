const express = require("express")
const path = require("path")
const router = express.Router()
const {upload} = require("../multer")
const User = require("../model/user")
const ErrorHandler = require("../utils/ErrorHandler")

router.post("/create-user",upload.single("file"),async(req,res)=>{
    console.log("user",file)
    console.log("cons here")
    const {name,email,password} = req.body
    const userEmail = await  User.findOne({email})
    if(userEmail){
        return next(new ErrorHandler("user aready exists",400))
    }
    const fileName = req.file.filename
    const fileUrl = path.join(fileName)
  
    const user = {
        name,
        email,
        password,
        avater:fileUrl
    }
    console.log(user)
})

module.exports = router