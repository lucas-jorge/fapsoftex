import express from "express";
import TransportadoraRotas from "./src/routes/TransportadoraRotas";
import sequelize from "./src/conexao/sequelize";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(TransportadoraRotas);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
  });
});
