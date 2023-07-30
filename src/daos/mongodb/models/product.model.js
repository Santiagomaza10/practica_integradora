import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String} ,
    price: { type: Number, required:true } ,
    thumbnail: { type: String} ,
    code: {type: String, required: true} ,
    stock: {type: Number, required: true} ,
    status: { type: Boolean, required: true }
})

productSchema.plugin(mongoosePaginate);

export const ProductModel = mongoose.model('products', productSchema)