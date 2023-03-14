const Sequelize = require('sequelize');

const sequelize = new Sequelize("nodesql", "root", "12345", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realiza com sucesso!");
});

module.exports = sequelize;
