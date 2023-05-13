const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todo = db.define('todo_table', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = Todo;