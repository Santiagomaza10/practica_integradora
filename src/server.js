import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import morgan from 'morgan';
import './daos/mongodb/connection.js';
import productRouter from './routes/product.routes.js';
import cartsRouter from './routes/carts.routes.js';
import userRouter from './routes/user.router.js';
import viewsRouter from './routes/views.router.js';
import './config/dbConnection.js';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';
import passport from 'passport';
import './passport/local-strategy.js';
import './passport/github-strategy.js';
import 'dotenv/config';


const mongoStoreOptions = {
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_ATLAS_URL,
        crypto: {
            secret:'1234' 
        }
    }),
    secret: '1234',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge:60000
    }
}

const app = express ();

app.use (express.json())
app.use (express.urlencoded({extended:true}));

app.use(errorHandler);
app.use(morgan('dev'))

/* HANDLEBARS */

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

app.use(cookieParser());
app.use(session(mongoStoreOptions))

/* PASSPORT -- SIEMPRE ANTES DE LAS RUTAS */

app.use(passport.initialize())
app.use(passport.session())

/* ROUTES */

app.use('/api/products', productRouter)
app.use('/api/carts', cartsRouter)
app.use('/users', userRouter)
app.use('/', viewsRouter)

/* PORT */

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

/* CLIENT SECRET: a9cbacd1af1e6343e8bf8e2063c4b92aedbd1ad1
    App ID: 377555
    Client ID: Iv1.18f1ea9bd8a7d6f1
    Private key
SHA256:fOhSmffUEcPEEpctKVaeUsa7m2VHArA5/VsvRqkw02w=

*/