import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './config';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => console.log(error.reason));

const app = express(); // corre la función express
app.use(bodyParser.json());
// Hace el llamado a la ruta de creación de usuarios.
app.use('/api/users', userRoute);
// Hace el llamado a la ruta de creación de productos.
app.use('/api/products', productRoute);

// Hace el llamado y muestra el detalle individual de cada producto
// app.get("/api/products/:id", (req, res)=> {
//     const productId = req.params.id;
//     const product = data.products.find(x => x._id === productId);
//     if(product)
//         res.send(product);
//     else
//         res.status(404).send({ msg: "Product Not Found." });
// });

// // Hace el llamado y muestra el listado de productos del Home
// app.get("/api/products", (req, res)=> {
//     res.send(data.products);
// });

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});