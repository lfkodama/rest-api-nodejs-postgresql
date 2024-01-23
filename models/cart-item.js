const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const CartItem = sequelize.define('cart-item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quatity: Sequelize.INTEGER
});

module.exports = CartItem;