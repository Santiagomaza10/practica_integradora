import { UserModel } from "../daos/mongodb/models/user.model.js";

export const products = (req,res) => {
    res.render("products")
}

export const register = (req, res) => {
    res.render("register")
};
export const errorRegister = (req, res) => {
    res.render("errorRegister")
};
export const login = (req, res) => {
    res.render("login")
};
export const errorLogin = (req, res) => {
    res.render("errorLogin")
};
export const profile = async (req, res) => {
    const user = req.session
    console.log("toy en el profile controler", user)
    res.render("profile")
};