const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Click = sequelize.define('Click', {
    // Define attributes
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ip_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isp: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'clicks',
    // Other model options
});

module.exports = Click;
