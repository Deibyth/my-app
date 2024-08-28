const express = require("express");
const passport = require("passport");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");
//Importar rutas
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 3000;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);
app.disable("x-powered-by");

app.set("port", port);
//Llamado de rutas
userRoutes(app);
//Directorio ip v4 de la maquina, consultar con Ipconfig;
server.listen(port, "10.175.80.159" || "localhost", function () {
  console.log(
    `Aplicación de NodeJS ${process.pid} inicio en el puerto ${
      server.address().address
    } : ${server.address().port}`
  );
});

app.get("/", (req, res) => {
  res.send("Ruta raiz del backend");
});

// Rutas

app.get("/test", (req, res) => {
  res.send("Estas en la ruta de test");
});

//Error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});
