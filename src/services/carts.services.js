import * as cartsDao from '../daos/mongodb/carts.dao.js'

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

export const addProdToCartsService = async () => {
    try {
        
    } catch (error) {
        console.log(error)
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