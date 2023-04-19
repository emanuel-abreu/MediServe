const express = require("express");

const connection = require("./src/database/labmedicinebd");

const Patient = require("./src/modules/patient");
const Doctor = require("./src/modules/doctor");
const Nurse = require("./src/modules/nurse");

const app = express();

const postRoutes = require("./src/routes/postRoutes");
const getRoutes = require("./src/routes/getRoutes");
const putRoutes = require("./src/routes/putRoutes");
const deleteRoutes = require("./src/routes/deleteRoutes");

app.use("/", postRoutes);
app.use("/", getRoutes);
app.use("/", putRoutes);
app.use("/", deleteRoutes);

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.listen(3333, () => console.log("Servidor Online"));
