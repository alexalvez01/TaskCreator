import app from "./app.js"; 
import {sequelize} from "./config/database.js"; 

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("DB conectada");

    await sequelize.sync({ alter: true });
    console.log("Tablas sincronizadas");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });

  } catch (error) {
    console.error("Error conectando a DB, reintentando...", error.message);

    setTimeout(startServer, 5000); 
  }
}

startServer();
