import { connect } from "mongoose";
import 'dotenv/config';
/* 
export const connectionString = 'mongodb+srv://mazasantiago10:Santi4794@proyectobackend.kmodbth.mongodb.net/ecommerce?retryWrites=true&w=majority'
 */
try {
    await connect(
        process.env.MONGO_ATLAS_URL
        );
    console.log('Conectado a la base de datos de MongoDB !')
} catch (error) {
    console.log(error)
}