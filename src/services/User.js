import { User } from '../database/index'

const registeruser = async ({name,email,password,username})=>{
    console.log(name+"hhh");
    try{
        let user = await User.findOne({email});
        if(user)
            return {error:"email id already exists"};
        let createuser = {name,email,password,username};
        return await User.create(createuser);

    }
    catch(err){
        return {error:err+""};
    }
}

export {registeruser}