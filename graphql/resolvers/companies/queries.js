import Company from "../../../models/companies.js";

const companyQueries = {
    allCompanies: async (_, args) => {
        return Company.find()
    },

    company: async(_, args) => {
        return Company.findById(args.id)
    }
}

export default companyQueries;