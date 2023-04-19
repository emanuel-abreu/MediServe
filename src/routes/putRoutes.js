const express = require("express");

const {
  updateStatusPatient,
  updatePatient,
} = require("../controllers/patients/updatePatients");
const {
  updateStatusDoctor,
  updateDoctor,
} = require("../controllers/doctors/updateDoctor");
const updateNurse = require("../controllers/nurses/updateNurse");

const router = express.Router();

// OTIMIZAR E VALIDAR ESSAS ROTAS DE ATUALIZAÇÃO
router.put("/api/patients/:id", updatePatient);
router.put("/api/patients/:id/status", updateStatusPatient);
router.put("/api/doctors/:id", updateDoctor);
router.put("/api/doctors/:id/status", updateStatusDoctor);
router.put("/api/nurses/:id", updateNurse);

module.exports = router;
