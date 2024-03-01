const mongoose = require ('mongoose');

const dbConnection = async () => {
  await mongoose.connect("mongodb://localhost:27017/api-usuarios");
  console.log("Base de datos conectada");
}


module.exports = dbConnection;