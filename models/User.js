import {Schema,model} from 'mongoose';

const userSchema = new Schema({

    fullname:{

         type:String,
         required:[true,"Provide a fullname"]
    },
    password:{
        type:String,
        minlength:[8,"Password must be at least 8 characters"],
        required:[true,"Provide a password"]

    },

    email :{

        type:String,
        required:[true,"Provide an email"]

    }
},{timestamps:true});

export const User = model('User',userSchema)
