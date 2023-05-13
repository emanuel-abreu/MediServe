const express = require("express");

const updatePatient = require("../controllers/patients/updatePatients");
const updateStatusPatient = require("../controllers/patients/updateStatusPatient");

const updateDoctor = require("../controllers/doctors/updateDoctor");
const updateStatusDoctor = require("../controllers/doctors/updateStatusDoctor");

const updateNurse = require("../controllers/nurses/updateNurse");

const router = express.Router();

router.put("/api/patients/:id", updatePatient);
router.put("/api/patients/:id/status", updateStatusPatient);

router.put("/api/doctors/:id", updateDoctor);
router.put("/api/doctors/:id/status", updateStatusDoctor);

router.put("/api/nurses/:id", updateNurse);

module.exports = router;
