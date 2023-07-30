import * as cartsDao from '../daos/mongodb/carts.dao.js'
import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";

const prodDao = new ProductDaoMongoDB();

export const getAllCartsService = async () => {
    try {
        const response = await cartsDao.getAllCarts();
        return response
    } catch (error) {
        console.log(error)
    }
}

export const createCartService = async (obj) => {
    try {
        const newCart = await cartsDao.createCart(obj);
        if(!newCart) return false;
        else return newCart;
    } catch (error) {
        console.log(error)
    }
}

export const getCartByIdService = async (id) => {
    try {
        const cart = await cartsDao.getCartById(id)
        if (!cart) return false
        else return cart
    } catch (error) {
        console.log(error)
    }
}

export const addProdToCartService = async (cartId, prodId) => {
    try {
        const cart = await cartsDao.getCartById(cartId);
        const product = await prodDao.getById(prodId);
    
        if (!product) throw new Error("Product not found");
        if (!cart) throw new Error("Cart not found");
        
        const newCart = await cartsDao.addProdToCart(cartId, prodId);
        return newCart;
      } catch (error) {
        console.log(error);
      }

}

export const removeCartService = async (id) => {
    try {
        const removeCart = await cartsDao.removeCart(id)
        return removeCart
    } catch (error) {
        console.log(error)
    }
}