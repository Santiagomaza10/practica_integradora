import { Router } from "express";
import {
  login,
  errorLogin,
  register,
  errorRegister,
  profile
} from "../controllers/views.controllers.js";
import { logoutUser } from "../controllers/user.controllers.js";
import { getAll } from "../controllers/product.controllers.js";


const router = Router();

router.get("/login", login);

router.get("/register", register);

router.get("/error-login", errorLogin);

router.get("/error-register", errorRegister);

router.get('/profile', getAll)

router.get('/logout', logoutUser)

export default router;
