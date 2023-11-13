import { DataTypes, Model } from 'sequelize';
import sequelize from '../conexao/sequelize';

class Cliente extends Model {
  public id!: number;
  public nome!: string;
  public email!: string;

  static initialize() {
    Cliente.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        tableName: 'clientes',
        sequelize,
      }
    );
  }
}

Cliente.initialize();

export default Cliente;
export { Cliente };