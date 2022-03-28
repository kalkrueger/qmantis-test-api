import  User  from "../../../models/users.js"
import Company from "../../../models/companies.js"

const userMutations = {
    createUser: (_, { user }) => {
        let newUser = new User( user );
        return newUser.save().then(res => {
            return res
        }); 
    }
}

export default userMutations