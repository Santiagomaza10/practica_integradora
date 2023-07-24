import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String} ,
    price: { type: Number, required:true } ,
    thumbnail: { type: String} ,
    code: {type: String, required: true} ,
    stock: {type: Number, required: true} ,
    status: { type: Boolean, required: true }
})

export const ProductModel = mongoose.model('products', productSchema)