import { createHash, isValidPassword } from "../../utils.js";
import { UserModel } from "./models/user.model.js";
import { createCart } from "./carts.dao.js";
import { CartsModel } from "./models/carts.model.js";

export default class UserDao {
  async registerUser(user) {
    try {
      const { email, password } = user;
      const existUser = await this.getByEmail(email);
      if (!existUser) {
        if (email === "admincoder@coder.com" && password === "adminCod3r123") {

          return await UserModel.create({
            ...user,
            password: createHash(password),
            role: "admin",
          });
        }

        const cart = await createCart()
        return await UserModel.create({
          ...user,
          password: createHash(password),
          cart: cart
        });
      } else return false;
    } catch (error) {
      console.log(error);
    }
  }

  async loginUser(user) {
    try {
      const { email, password } = user;
      const userExist = await this.getByEmail(email);
      if (userExist) {
        const passValid = isValidPassword(password, userExist);
        if (!passValid) return false;
        else return userExist;
      } else return false;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const userExist = UserModel.findById(id);
      if (userExist) {
        return userExist;
      } else return false;
    } catch (error) {
      console.log(error);
    }
  }

  async getByEmail(email) {
    try {
      const userExist = await UserModel.findOne({ email });
      if (userExist) {
        return userExist;
      } else return false;
    } catch (error) {
      console.log(error);
    }
  }
}
