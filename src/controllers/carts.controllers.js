import * as service from "../services/carts.services.js"

export const getAllCarts = async (req,res,next) => {
    try {
        const response = await service.getAllCartsService();
        res.status(200).json(response)
    } catch (error) {
        next(error.message)
    }
}

export const getById = async (req,res,next) => {
    try {
        const { id } = req.params;
        const cart = await service.getCartByIdService(id);
        if (!cart) res.status(404).json({msg: "Cart not found"});
        else res.status(200).json(cart);
    } catch (error) {
        next(error.message)
    }
}

export const create = async (req,res,next) => {
    try {
        const newCart = await service.createCartService(req.body);
        if(!newCart) res.status(404).json({msg :"Validation error!"})
        else res.status(200).json(newCart)
    } catch (error) {
        next(error.message)
    }
}

export const addProduct = async (req,res,next) => {
    try {
        const { id, productId } = req.params;
        const cart = await service.addProdToCartService(id, productId);
    
        if (cart) {
          res.status(201).json(cart);
        } else {
          res.status(404).json({ mesagge: "Not found" });
        }
      } catch (error) {
        next(error);
      }
}

export const removeFromCart = async (req,res,next) => {
    try {
        const { id, productId } = req.params;
        const cart = await service.removeFromCartService(id, productId);
        if (cart) {
            res.status(201).json(cart);
        } else {
            res.status(404).json({message: "Not found"})
        }

    } catch (error) {
        next(error);
    }
}

export const remove = async (req,res,next) => {
    try {
        const { id } = req.params;
        const cartRemoved = await service.removeCartService(id);
        if(!cartRemoved) res.status(404).json({msg: "Cart not found!"})
        else res.status(200).json(cartRemoved)
    } catch (error) {
        next(error.message)
    }
}

export const updateQuantity = async (req,res,next) => {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;
        const updateQuantity = await service.updateQuantityService(cid, pid, quantity)

        if(!updateQuantity) res.status(404).json({msg: "error updating quantity"})
        else res.status(200).json(updateQuantity)
    } catch (error) {
        next(error);
    }
}