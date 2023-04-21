const Patient = require("../../modules/patient");

async function deletePatient(req, res) {
  try {
    await Patient.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!req.params.id) {
      return res
        .status(404)
        .json({ message: "Registro do paciente inexistente" });
    }

    res.status(204).json({ message: "Excluído" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = deletePatient;
