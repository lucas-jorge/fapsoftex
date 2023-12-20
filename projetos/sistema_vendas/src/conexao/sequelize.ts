import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sistema_vendas', 'root', 'root', {
host: 'localhost',
dialect: 'mysql',

});

export default sequelize;