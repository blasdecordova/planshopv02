import express from 'express';
import data from './data';


const app = express(); // corre la función express

// Hace el llamado y muestra el detalle individual de cada producto
app.get("/api/products/:id", (req, res)=> {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if(product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." });
});

// Hace el llamado y muestra el listado de productos del Home
app.get("/api/products", (req, res)=> {
    res.send(data.products);
});

app.listen(5000, () => {console.log("Server started at http://localhost:5000")});