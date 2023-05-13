const express = require("express");

const listPatient = require("../controllers/patients/listPatients");
const listStatusPatients = require("../controllers/patients/listStatusPatients");

const listDoctor = require("../controllers/doctors/listDoctor");
const listStatusDoctors = require("../controllers/doctors/listStatusDoctors");

const listNurse = require("../controllers/nurses/listNurse");
const listAllNurses = require("../controllers/nurses/listAllNurses");

const router = express.Router();

router.get("/api/patients/:id", listPatient);
router.get("/api/patients", listStatusPatients);

router.get("/api/doctors/:id", listDoctor);
router.get("/api/doctors", listStatusDoctors);

router.get("/api/nurses/:id", listNurse);
router.get("/api/nurses", listAllNurses);

module.exports = router;
