import * as service from "../services/product.services.js";

export const getAll = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const response = await service.getAll(page, limit);
    const next = response.hasNextPage ? `localhost:8080/api/products?page=${response.nextPage}` : null;
    const prev = response.hasPrevPage ? `localhost:8080/api/products?page=${response.prevPage}` : null;
/*     res.render("products", response) // lo que me sugirio el tutor
    console.log(response) */
    res.status(200).json({
      info: {
        count: response.totalDocs,
        pages: response.totalPages,
        next: next ,
        prev: prev
      },
      results: response.docs
    });
  } catch (error) {
    next(error.message);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prod = await service.getById(id);
    if (!prod) res.status(404).json({ msg: "Product not found" });
    else res.status(200).json(prod);
  } catch (error) {
    next(error.message);
  }
};

export const create = async (req, res, next) => {
  try {
    const newProd = await service.create(req.body);
    if (!newProd) res.status(404).json({ msg: "Validation Error!" });
    else res.status(200).json(newProd);
  } catch (error) {
    next(error.message);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodUpd = await service.update(id, req.body);
    res.json(prodUpd);
  } catch (error) {
    next(error.message);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodDel = await service.remove(id);
    res.json(prodDel);
  } catch (error) {
    next(error.message);
  }
};
