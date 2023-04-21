const Service = require("../../modules/service");
const Doctor = require("../../modules/doctor");
const Patient = require("../../modules/patient");

async function createService(req, res) {
  try {
    const { patientId, doctorId } = req.body;

    if (!patientId || !doctorId) {
      return res.status(400).json({
        message:
          "Os campos de identificador do paciente e médico são obrigatórios.",
      });
    }

    const patient = await Patient.findByPk(patientId);
    const doctor = await Doctor.findByPk(doctorId);

    if (!patient) {
      return res.status(404).json({ message: "Paciente não encontrado." });
    } else if (!doctor) {
      return res.status(404).json({ message: "Médico não encontrado." });
    }

    const service = await Service.create({ patientId, doctorId });

    await updateStatusAfterService(service);

    res.status(200).json({
      patient,
      doctor,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao criar o atendimento." });
  }
}

async function updateStatusAfterService(service) {
  const patient = await Patient.findByPk(service.patientId);
  const doctor = await Doctor.findByPk(service.doctorId);

  patient.total_of_services++;
  doctor.total_of_services++;

  patient.status = "ATENDIDO";
  await patient.save();
}

module.exports = createService;
