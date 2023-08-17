import { UserModel } from "../daos/mongodb/models/user.model.js";
import { getAll } from "../services/product.services.js";

export const products = async (req,res) => {
    try {
        const response = await getAll(req.query)
        const arrayProds = response.docs;
        const plainProds = arrayProds.map((arr) => arr.toObject())
        res.render("products", {docs: plainProds})
    } catch (error) {
        console.log(error)
    }
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
    res.render("profile")
};