import UserDao from "../daos/mongodb/user.dao.js";

const userDao = new UserDao();// CHEQUEAR ESTO

export const registerUser = (req, res, next) => {
  try {
    if (!req.session) return console.log("register error")
    res.json({
      msg: 'register ok',
      session: req.session
    })
    res.redirect('/login')
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
    res.json({
      msg: 'Login ok',
      user
    })
  } catch (error) {
    next(error.message)
  }
}

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

export const loginGithub = async (req,res) => {
  res.redirect('/products')
}