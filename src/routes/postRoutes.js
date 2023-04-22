const express = require("express");

const createPatient = require("../controllers/patients/createPatient");
const createDoctor = require("../controllers/doctors/createDoctor");
const createNurse = require("../controllers/nurses/createNurse");
const createService = require("../controllers/services/createService");

const router = express.Router();

router.post("/api/patients", createPatient);
router.post("/api/doctors", createDoctor);
router.post("/api/nurses", createNurse);
router.post("/api/services", createService);

module.exports = router;
