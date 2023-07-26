import { CartsModel } from "./models/carts.model.js";

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
  const cart = await CartsModel.findById(cartId)
  cart.products.push(prodId)
  cart.save();
  return cart
};

export const removeCart = async (id) => {
  try {
    const response = await CartsModel.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
