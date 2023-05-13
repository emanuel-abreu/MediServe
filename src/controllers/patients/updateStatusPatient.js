const Patient = require("../../models/patient");

async function updateStatusPatient(req, res) {
  try {
    const registeredPatient = await Patient.findByPk(req.params.id);
    if (!registeredPatient) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do paciente, verifique se foi informado corretamente",
      });
    }
    if (
      ![
        "AGUARDANDO_ATENDIMENTO",
        "EM_ATENDIMENTO",
        "ATENDIDO",
        "NAO_ATENDIDO",
      ].includes(req.body.status)
    ) {
      return res.status(400).json({
        message: "Status inválido, verifique se foi informado corretamente",
      });
    }

    registeredPatient.status = req.body.status;
    await registeredPatient.save();
    res.status(200).json(registeredPatient);
  } catch (error) {
    res.status(500).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

module.exports = updateStatusPatient;
