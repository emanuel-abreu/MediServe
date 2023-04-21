const Nurse = require("../../modules/nurse");

async function deleteNurse(req, res) {
  try {
    await Nurse.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!req.params.id) {
      return res
        .status(404)
        .json({ message: "Registro de enfermeiro(a) inexistente" });
    }

    res.status(204).json({ message: "Excluído" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = deleteNurse;
