const Nurse = require("../../models/nurse");

async function deleteNurse(req, res) {
  try {
    const registeredNurse = await Nurse.findByPk(req.params.id);

    if (!registeredNurse) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do enfermeiro(a), verifique se foi informado corretamente",
      });
    }

    await Nurse.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(204).json({ message: "Excluído" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = deleteNurse;
