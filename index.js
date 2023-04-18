const express = require("express");

const createPatient = require("./src/controllers/patients/createPatient");
const deletePatient = require("./src/controllers/patients/deletePatients");
const {
  listPatient,
  listStatusPatients,
} = require("./src/controllers/patients/listPatients");
const {
  updateStatusPatient,
  updatePatient,
} = require("./src/controllers/patients/updatePatients");

const connection = require("./src/database/labmedicinebd");

const Patient = require("./src/modules/patient");
const Doctor = require("./src/modules/doctor");

const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.post("/api/patients", createPatient);

app.get("/api/patients/:id", listPatient);
app.get("/api/patients", listStatusPatients);

// OTIMIZAR ESSE UPDATE
app.put("/api/patients/:id", updatePatient);
app.put("/api/patients/:id/status", updateStatusPatient);

app.delete("/api/patients/:id", deletePatient);

app.listen(3333, () => console.log("Servidor Online"));
