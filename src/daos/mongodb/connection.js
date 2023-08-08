import mongoose from "mongoose";

export const connectionString = 'mongodb+srv://mazasantiago10:Santi4794@proyectobackend.kmodbth.mongodb.net/ecommerce?retryWrites=true&w=majority'

try {
    await mongoose.connect(connectionString)
    console.log('Conectado a la base de datos de MongoDB !')
} catch (error) {
    console.log(error)
}