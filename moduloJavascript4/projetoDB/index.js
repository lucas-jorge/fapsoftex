//Implemente e trate uma conexão com o seu banco de dados, usando JavaScript. Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva. Se isso não ocorrer, retorne uma frase informando o erro.

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

const Store = sequelize.define('Store', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  openHours: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    
    return Store.sync();
  })
  .then(() => {
    console.log('Modelo "Store" sincronizado com o banco de dados.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
