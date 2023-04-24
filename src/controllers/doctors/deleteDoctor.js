const Doctor = require("../../models/doctor");

async function deleteDoctor(req, res) {
  try {
    const registeredDoctor = await Doctor.findByPk(req.params.id);

    await Doctor.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!registeredDoctor) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do médico(a), verifique se foi informado corretamente",
      });
    }

    res.status(204).json({ message: "Excluído" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = deleteDoctor;
