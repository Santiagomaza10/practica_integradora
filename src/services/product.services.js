import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";

const prodDao = new ProductDaoMongoDB();

/* import ProductDaoFS from "../daos/filesystem/productManager.js";
const prodDao = new ProductDaoFS(); */

export const getAll = async (page, limit) => {
    try {
        const response = await prodDao.getAll(page, limit);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getById = async (id) => {
    try {
        const item = await prodDao.getById(id)
        if (!item) return false;
        else return item;
    } catch (error) {
        console.log(error)
    }
}

export const create = async (obj) => {
    try {
        const newProd = await prodDao.create(obj)
        if (!newProd) return false;
        else return newProd;
    } catch (error) {
        console.log(error)
    }
}

export const update = async (id, obj) => {
    try {
        const item = await prodDao.update(id, obj);
        return item;
    } catch (error) {
        console.log(error)
    }
}

export const remove = async (id) => {
    try {
        const item = await prodDao.delete(id)
        return item;
    } catch (error) {
        console.log(error)
    }
}