import User from "../../../models/users.js"
import Product from "../../../models/products.js"
import Purchase from "../../../models/purchases.js"


const purchaseMutations = {
    addPurchase: async (_, { purchase }) => {
        console.log(purchase)
        return Product.findById(purchase.product)
            .then(res => {
                let newPurchase = new Purchase({
                    ...purchase,
                    price: res.price
                })
                return newPurchase.save()
                    .then(purchase => {
                        console.log(purchase)
                        User.findByIdAndUpdate(purchase.userId, 
                          { $push: { purchases : purchase._id } }, 
                          {new: true} ).then()
                        return purchase
                      })
            })
    }
}

export default purchaseMutations