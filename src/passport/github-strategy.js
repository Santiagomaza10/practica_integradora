import { Strategy as GithubStrategy } from 'passport-github2';
import passport from 'passport';
import UserDao from '../daos/mongodb/user.dao.js';
const userDao = new UserDao();

const strategyOptions = {
    clientID: 'Iv1.18f1ea9bd8a7d6f1',
    clientSecret: 'a9cbacd1af1e6343e8bf8e2063c4b92aedbd1ad1',
    callbackURL: 'http://localhost:8080/users/profile-github'
}

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
    const email = profile._json.email !== null ? profile._json.email : profile._json.blog;
    const user = await userDao.getByEmail(email);
    if (user) return done( null, user );
    const newUser = await userDao.registerUser({
        first_name: profile._json.name.split('')[0],
        last_name: profile._json.name.split('')[1],
        email,
        password: '',
        isGithub: true
    })
    return done (null, newUser)
}

passport.use('github', new GithubStrategy(strategyOptions, registerOrLogin));