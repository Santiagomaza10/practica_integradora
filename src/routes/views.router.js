import { Router } from "express";
import {
  login,
  errorLogin,
  register,
  errorRegister,
  current,
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

router.get("/current", current)

export default router;
