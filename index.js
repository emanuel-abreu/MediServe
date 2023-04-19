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

const createDoctor = require("./src/controllers/doctors/createDoctor");

const {
  listDoctor,
  listStatusDoctors,
} = require("./src/controllers/doctors/listDoctor");

const {
  updateStatusDoctor,
  updateDoctor,
} = require("./src/controllers/doctors/updateDoctor");

const deleteDoctor = require("./src/controllers/doctors/deleteDoctor");

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

// OTIMIZAR ESSE UPDATE E VALIDAR OS CAMPOS
app.put("/api/patients/:id", updatePatient);
app.put("/api/patients/:id/status", updateStatusPatient);

app.delete("/api/patients/:id", deletePatient);

app.post("/api/doctors", createDoctor);

app.get("/api/doctors/:id", listDoctor);
app.get("/api/doctors", listStatusDoctors);

// OTIMIZAR ESSE UPDATE e VALIDAR OS CAMPOS
app.put("/api/doctors/:id", updateDoctor);
app.put("/api/doctors/:id/status", updateStatusDoctor);

app.delete("/api/doctors/:id", deleteDoctor);

app.listen(3333, () => console.log("Servidor Online"));
