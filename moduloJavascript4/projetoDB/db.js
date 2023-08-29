const Sequelize = require('sequelize');
const sequelize = new Sequelize ('nome_do_banco', 'usuario', 'senha',{dialect: 'mysql', host: '127.0.0.1', port: 8889});

module.exports = sequelize;
