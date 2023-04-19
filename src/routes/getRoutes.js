const express = require("express");

const {
  listPatient,
  listStatusPatients,
} = require("../controllers/patients/listPatients");
const {
  listDoctor,
  listStatusDoctors,
} = require("../controllers/doctors/listDoctor");
const { listNurse, listAllNurses } = require("../controllers/nurses/listNurse");

const router = express.Router();

router.get("/api/patients/:id", listPatient);
router.get("/api/patients", listStatusPatients);
router.get("/api/doctors/:id", listDoctor);
router.get("/api/doctors", listStatusDoctors);
router.get("/api/nurses/:id", listNurse);
router.get("/api/nurses", listAllNurses);

module.exports = router;
