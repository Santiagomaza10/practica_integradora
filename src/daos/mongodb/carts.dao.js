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
/*     console.log("cart en el dao",cart) */
    await cart.save();
    return cart;
  } catch (error) {
    console.log(error);
  }
/*   const cart = await CartsModel.findById(cartId)
  const prodInCart = await cart.products.find ((prod) => prod.id === prodId )
  if(!prodInCart) {
    cart.products.push({
      id: prodId,
      quantity: 1
    })
  }
  else prodInCart.quantity++;
  cart.save();
  return cart */
};

export const removeCart = async (id) => {
  try {
    const response = await CartsModel.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};
