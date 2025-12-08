import app from "./app.js";
import { sequelize } from "./config/database.js";


import "./models/User.js";
import "./models/Task.js";

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL exitosa");

    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados");

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

main();