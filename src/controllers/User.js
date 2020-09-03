import {registeruser} from "../services/index"
const getregisterrequest = async(req,res)=>{
const {name,email,password,confirmPassword,username}=req.body;

try{
    const user = await registeruser({name,email,password,username});
    if(user.error)     
         return res.status(409).json({ errors: { msg: user.error } });
    res.end("register success");

}
catch(err){
    console.log("controllers");
    return res.end(err);

}
   



}

export { getregisterrequest };