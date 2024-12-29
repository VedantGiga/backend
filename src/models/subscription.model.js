import mongoose,{Schema} from "mongoose";

const subsriptionSchema = new Schema({
    subscribe:{
        type:Schema.Types.ObjectId,// one who is subscribing 
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId,// one whom the subscriber is subscribing
        ref:"User"
    }
}, {timestamps:true})

export const Subscription = mongoose.model("Subscription",subsriptionSchema)