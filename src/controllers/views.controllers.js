import { getAll } from "../services/product.services.js";
import UserDao from "../daos/mongodb/user.dao.js";

const userDao = new UserDao();

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

export const current = async (req, res) => {
    /* TRAYENDO PRODUCTOS */
    const response = await getAll(req.query)
    const arrayProds = response.docs;
    const plainProds = arrayProds.map((arr) => arr.toObject())
    /* TRAYENDO DATOS DEL USUARIO */
    const userId = req.session.passport.user
    const user = await userDao.getById(userId);
    const plainUser = user.toObject()

    res.render("current", {docs: plainProds, user: plainUser})
}