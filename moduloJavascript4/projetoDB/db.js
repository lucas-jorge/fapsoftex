const Sequelize = require('sequelize');
const sequelize = new Sequelize ('nome_do_banco', 'usuario', 'senha',{dialect: 'mysql', host: 'localhost', port: 3306});

module.exports = sequelize;
