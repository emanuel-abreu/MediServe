const express = require("express");

const deletePatient = require("../controllers/patients/deletePatients");
const deleteDoctor = require("../controllers/doctors/deleteDoctor");
const deleteNurse = require("../controllers/nurses/deleteNurse");

const router = express.Router();

router.delete("/api/patients/:id", deletePatient);
router.delete("/api/doctors/:id", deleteDoctor);
router.delete("/api/nurses/:id", deleteNurse);

module.exports = router;
