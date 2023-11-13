import express from 'express';
import clienteRoutes from './rotas/rotasCliente';
import sequelize from './conexao/sequelize';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(clienteRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
  });
});
