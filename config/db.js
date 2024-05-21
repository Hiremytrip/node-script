// In db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();
// Create a new instance of Sequelize for MySQL connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,  // Disable logging; default: console.log
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
    }
});

// Function to authenticate and sync the database
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // Optionally, sync all models at once.
        // await sequelize.sync();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Export the sequelize instance and connectDB function
module.exports = {
    sequelize,
    connectDB
};

