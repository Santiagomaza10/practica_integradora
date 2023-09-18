import { Router } from "express";
import {
  login,
  errorLogin,
  register,
  errorRegister,
  products
} from "../controllers/views.controllers.js";
import { logoutUser } from "../controllers/user.controllers.js"


const router = Router();

router.get("/login", login);

router.get("/register", register);

router.get("/error-login", errorLogin);

router.get("/error-register", errorRegister);

router.get('/logout', logoutUser)

router.get("/products", products)

export default router;
