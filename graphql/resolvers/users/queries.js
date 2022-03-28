import User from "../../../models/users.js";
//import Company from "../../../models/companies.js";

const userQueries = {
    allUsers: async (_, args) => {
        return User.find().then(res => {
            return res.map(user => user.populate({path: 'company'}))
        })
    },

    user: async (_, args) => {
        return User.findById(args.id).then(res => {
            return res.populate({ 
                path: "purchases",
                populate: { path: "product" }
            }).then(res => {
                return res.populate({path: "company"})
             })
        })
    },

    userPurchases: async (_, args) => {
        return User.findById(args.id).then(res => {
            res.company = () => Company.findById(res.companyId)
            res.purchases =  () => res.populate( {path: "purchasedProducts"} ).then(res => {
                return res.purchasedProducts
            })
            return res
        })
    },
};

export default userQueries