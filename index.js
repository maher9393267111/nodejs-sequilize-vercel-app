// const express = require("express");
// const app = express();
// const product = require("./api/product");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { request } = require("express");
// const uers = require('./routes/users')



// app.use(express.json({ extended: false }));
// app.use(cors());

// app.use("/api/product", product);
// app.use("/",  (req, res) => {
//     res.send("Hello World");
// } );

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));



import express from 'express';
import cors from 'cors';
import ProductRoute from './routes/ProductRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('Server running on port 5000'));