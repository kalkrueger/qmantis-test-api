import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String ,
    age: Number,
    company: { 
        type: Schema.Types.ObjectId, 
        ref: 'company' 
    },
    purchases: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'purchase' 
    }]
});

const User = mongoose.model('user', userSchema);

export default User;