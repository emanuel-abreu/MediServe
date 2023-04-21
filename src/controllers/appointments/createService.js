const Appointment = require("../../modules/appointment");
const Doctor = require("../../modules/doctor");
const Patient = require("../../modules/patient");

async function createService(req, res) {
  try {
    const { patientId, doctorId } = req.body;

    // Cria o registro de atendimento
    const appointment = await Appointment.create({ patientId, doctorId });

    // Atualiza o status do paciente e do médico
    await updateStatusAfterCreateAppointment(appointment);

    return res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao criar o atendimento." });
  }
}

async function updateStatusAfterCreateAppointment(appointment) {
  const patient = await Patient.findByPk(appointment.patientId);
  const doctor = await Doctor.findByPk(appointment.doctorId);

  // Incrementa atributos de atendimento do paciente e médico
  patient.total_of_services++;
  doctor.total_of_services++;

  // Atualiza o status de atendimento do paciente
  patient.status = "ATENDIDO";
  await patient.save();
}

module.exports = createService;
