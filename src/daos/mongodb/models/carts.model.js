import mongoose from 'mongoose';

const prodToCartSchema = new mongoose.Schema({
    prodId: {type:mongoose.Schema.Types.ObjectId, ref:'products',},
    quantity: { type: Number, }
})

const cartsSchema = new mongoose.Schema({
    products: { type: [prodToCartSchema], required: true}
})

export const CartsModel = mongoose.model('carts', cartsSchema)