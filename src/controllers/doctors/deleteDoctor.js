const Doctor = require("../../modules/doctor");

async function deleteDoctor(req, res) {
  try {
    await Doctor.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(204).json({ message: "excluido" });
  } catch (error) {
    res.status(404).json({ message: "Registro de paciente inexistente" });
  }
}

module.exports = deleteDoctor;
