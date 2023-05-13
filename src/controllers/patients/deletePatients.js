const Patient = require("../../models/patient");

async function deletePatient(req, res) {
  try {
    const registeredPatient = await Patient.findByPk(req.params.id);

    if (!registeredPatient) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do paciente, verifique se foi informado corretamente",
      });
    }

    await Patient.destroy({
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

module.exports = deletePatient;
