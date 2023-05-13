const Doctor = require("../../models/doctor");
const Patient = require("../../models/patient");

async function updateStatusAfterService(service) {
  const patient = await Patient.findByPk(service.patientId);
  const doctor = await Doctor.findByPk(service.doctorId);

  patient.total_of_services += 1;
  doctor.total_of_services += 1;

  patient.status = "ATENDIDO";
  await doctor.save();
  await patient.save();
}

module.exports = updateStatusAfterService;
