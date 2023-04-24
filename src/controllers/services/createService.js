const Service = require("../../models/service");
const Doctor = require("../../models/doctor");
const Patient = require("../../models/patient");

async function createService(req, res) {
  try {
    const { patientId, doctorId } = req.body;

    if (!patientId || !doctorId) {
      return res.status(400).json({
        message:
          "Os campos de identificador do paciente e do médico são obrigatórios para cadastrar o atendimento.",
      });
    }

    const patient = await Patient.findByPk(patientId);
    const doctor = await Doctor.findByPk(doctorId);

    if (!patient) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do paciente, verifique se foi informado corretamente",
      });
    } else if (!doctor) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do médico(a), verifique se foi informado corretamente",
      });
    }

    if (doctor.status === "INATIVO") {
      return res.status(400).json({
        message:
          "Médico(a) não pode fazer atendimento, pois se encontra INATIVO(A)",
      });
    }

    const service = await Service.create({ patientId, doctorId });

    await updateStatusAfterService(service);

    // Recarrega os dados do paciente e do médico  já atualizados
    await patient.reload();
    await doctor.reload();

    await res.status(200).json({
      patient,
      doctor,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

async function updateStatusAfterService(service) {
  const patient = await Patient.findByPk(service.patientId);
  const doctor = await Doctor.findByPk(service.doctorId);

  patient.total_of_services += 1;
  doctor.total_of_services += 1;

  patient.status = "ATENDIDO";
  await doctor.save();
  await patient.save();
}

module.exports = createService;
