require("dotenv").config();
const express = require("express");

const connection = require("./src/database/labmedicinebd");

const app = express();

const postRoutes = require("./src/routes/postRoutes");
const getRoutes = require("./src/routes/getRoutes");
const putRoutes = require("./src/routes/putRoutes");
const deleteRoutes = require("./src/routes/deleteRoutes");

// precisa ficar antes das rotas, para ele poder ler os json
app.use(express.json());

app.use("", postRoutes);
app.use("", getRoutes);
app.use("", putRoutes);
app.use("", deleteRoutes);

connection.sync({ alter: true });

app.listen(3000, () => console.log("Servidor Online"));
