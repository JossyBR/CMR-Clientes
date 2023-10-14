//Archivo para toda la configuracion del servidor de apollo

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");

const conectarDB = require("./config/db");

//Conectar a la base de datos
conectarDB();

//Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
}); //Creacion de instancia, se le pasan los typedefs y resolvers para que los registres

//Arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor Listo en la URL ${url}`);
});
