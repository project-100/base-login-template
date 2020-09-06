const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
import { User } from '../database/index';
passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})
passport.use(
    new GoogleStrategy({
        callbackURL:'/api/auth/google',
        clientID:"281778592009-3qqg2cfnachhroo09f4ampebdk399gd0.apps.googleusercontent.com",
        clientSecret:"eGzns4dyfBWQ6eKEt6I-f4e2",
        passReqToCallback:true


},async (request,accesstoken,refreshtoken,profile,done)=>{
   var email=profile._json.email;
   var name=profile.displayName;
   var password=profile.id;
   var username=profile.displayName;
   try{
    const user=await User.findOne({email});
    if(!user){
        await new User({name,email,password,username}).save();
        console.log("user created");
    }
    if(user){
        console.log('existed');
        console.log(user.email);
    }
}
catch(err){
    console.log("error in passport setup"+err)
}

  
    console.log("callback");
    console.log(profile);
    console.log(profile._json.email);
    return done(null,profile);

})
);