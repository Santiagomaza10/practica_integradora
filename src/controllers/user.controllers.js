import UserDao from "../daos/mongodb/user.dao.js";

const userDao = new UserDao();// CHEQUEAR ESTO

export const registerUser = (req, res, next) => {
  try {
    if (!req.session) return console.log("register error")
    res.json({
      msg: 'register ok',
      session: req.session
    })
  } catch (error) {
    next(error.message)
  }
}

export const loginUser = async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const user = await userDao.getById(userId);
    console.log("controller user",user, "termina el controller user")
    if(user) {
      res.redirect('/products'); //modifique esto antes mandaba a profile
  } else res.redirect('/error-login')
/*     res.json({
      msg: 'Login ok',
      user
    }) */
  } catch (error) {
    next(error.message)
  }
}

/* export const registerUser = async (req, res) => {
  try {
    const newUser = await userDao.registerUser(req.body);
    if (newUser) res.redirect("/login");
    else res.redirect("/error-register");
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async(req,res) => {
    try {
        const { email, password } = req.body;
        const user = await userDao.loginUser(req.body);
        if(user) {
            req.session.email = email;
            req.session.password = password;
            res.redirect('/products'); //modifique esto antes mandaba a profile
        } else res.redirect('/error-login')
    } catch (error) {
        console.log(error)
    }
} */

export const logoutUser = async (req,res) => {
  try {
    req.session.destroy((err) => {
      if(!err) res.redirect('/login');
      else res.json({msg: 'session destroy' })
    })
  } catch (error) {
    console.log(error)
  }
}