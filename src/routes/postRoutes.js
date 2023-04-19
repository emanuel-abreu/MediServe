const express = require("express");

const createPatient = require("../controllers/patients/createPatient");
const createDoctor = require("../controllers/doctors/createDoctor");
const createNurse = require("../controllers/nurses/createNurse");

const router = express.Router();

router.post("/api/patients", createPatient);
router.post("/api/doctors", createDoctor);
router.post("/api/nurses", createNurse);

module.exports = router;