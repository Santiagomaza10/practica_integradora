import { CartsModel } from "./models/carts.model.js";
/* import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";

const prodDao = new ProductDaoMongoDB(); */

export const getAllCarts = async () => {
  try {
    const response = await CartsModel.find({});
    return response
  } catch (error) {
    console.log(error);
  }
};

export const createCart = async () => {
  try {
    const response = await CartsModel.create({products: []});
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCartById = async (id) => {
  try {
    const response = await CartsModel.findById(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addProdToCart = async (cartId, prodId) => {
  try {
    const cart = await CartsModel.findById(cartId);
    const productInCart = cart.products.find(
      (prod) => prod.id.toString() === prodId.toString()
    );

    if (productInCart) {
      productInCart.quantity++;
    } else {
      cart.products.push({
        id: prodId,
        quantity: 1,
      });
    }
    await cart.save();
    return cart;
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (cartId, prodId) => {
  try {
    const cart = await CartsModel.findById(cartId);
    cart.products.pull(prodId)
    console.log("en el dao",cart)
    await cart.save()
    return cart
  } catch (error) {
    console.log(error)
  }
}

export const removeCart = async (id) => {
  try {
    const cart = await CartsModel.findById(id);
    cart.products = [];
    await cart.save()
    return cart;
  } catch (error) {
    console.log(error);
  }
};

export const updateQuantity = async (cartId, prodId, quantity) => {
  try {
    const cart = await CartsModel.findById(cartId);
    const prodUpdate = cart.products.find((prod) => prod._id == prodId);
    prodUpdate.quantity = quantity;
    prodUpdate.save()
    return cart
  } catch (error) {
    console.log(error)
  }
}