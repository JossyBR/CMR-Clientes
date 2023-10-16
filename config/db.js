const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

//Para conectar

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      // useNewUrlPParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
    console.log("DB Conectada");
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    process.exit(1); //Detener la app
  }
};

module.exports = conectarDB;
