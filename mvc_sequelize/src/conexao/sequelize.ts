// sequelize.ts
import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('mpc', 'root', 'root', {
host: 'localhost',
dialect: 'mysql',
});
export default sequelize;