const Patient = require("../../modules/patient");

async function deletePatient(req, res) {
  try {
    await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(204).json({ message: "excluido" });
  } catch (error) {
    res.status(404).json({ message: "Registro de paciente inexistente" });
  }
}

module.exports = deletePatient;
