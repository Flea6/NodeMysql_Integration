const Sequelize = require('sequelize');
const sequelize = require('./db');
const db = require ('./db');

const User = db.define('users', {
    id:{    
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

//criar a tabela
//User.sync();

//verifica se tem alguma difereça na tabela e realiza a alteração
//User.sync({ alter: true})

module.exports = User;