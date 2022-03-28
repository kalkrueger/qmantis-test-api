import mongoose from "mongoose";
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: String,
    description: String,
});

const Company = mongoose.model('company', companySchema);

export default Company;