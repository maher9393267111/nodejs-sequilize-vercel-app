import { Sequelize } from 'sequelize';
import db from '../db/db.js';

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    inStock:DataTypes.BOOLEAN,
    price2: DataTypes.INTEGER,
}, {
    freezeTableName: true
});

export default Product;

//Link https://sequelize.org/docs/v6/core-concepts/model-basics/
(async() => {
    // any chnage in columns change it
    // in datbase  hemen beklemeden 
    await db.sync({alter: true });
})();