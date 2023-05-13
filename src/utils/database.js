const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    dialectOptions: { ssl: {require : true, rejectUnauthorized: false} },
})

module.exports = db;
// postgres://codevarsan:rKWAXGpMmSurfyulvEnzoyGLn49vWFcl@dpg-chfrh9ik728sd6hf3ksg-a.oregon-postgres.render.com/todos_cfsq