import { Router } from "express";
import * as controller from "../controllers/carts.controllers.js"

const router = Router();

router.get ('/', controller.getAllCarts);

router.get('/:id', controller.getById);

router.post ('/', controller.create);

router.post("/:id/product/:productId", controller.addProduct);

router.delete('/:id', controller.remove);

router.delete("/:id/product/:productId", controller.removeFromCart)

export default router