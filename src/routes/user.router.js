import { Router } from "express";
import { loginUser, registerUser, logoutUser } from "../controllers/user.controllers.js";
import passport from 'passport'

const router = Router();

router.post("/register", passport.authenticate('register'), registerUser);

router.post("/login",passport.authenticate('login'), loginUser);

router.get('/logout', logoutUser)

router.get('/register-github', passport.authenticate('github', {scope: ['user:email']}))

router.get('/profile-github', passport.authenticate('github', {scope: ['user:email']}),
 (req, res) => {
    
    res.redirect('/products')
})

export default router;
