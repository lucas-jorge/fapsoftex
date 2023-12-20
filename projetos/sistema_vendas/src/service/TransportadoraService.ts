import { DataTypes, Model } from 'sequelize';
import sequelize from " .. /conexao/sequelize";

class Transportadora extends Model {

public id !: number;
public nomel: string;
public emaill: string;

Transportadora.init(

id: {
type: DataTypes. INTEGER.UNSIGNED,
autoIncrement: true,
primarykey: true,

nome: {
type: DataTypes.STRING,
allowNull: false,

email:{
type: DataTypes. STRING,
allowNull:false,
unique: true,

tableName: 'transportadora',
sequelize,

);

export default Transportadora;