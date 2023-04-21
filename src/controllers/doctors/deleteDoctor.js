const Doctor = require("../../modules/doctor");

async function deleteDoctor(req, res) {
  try {
    await Doctor.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!req.params.id) {
      return res
        .status(404)
        .json({ message: "Registro do médico inexistente" });
    }

    res.status(204).json({ message: "Excluído" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = deleteDoctor;
