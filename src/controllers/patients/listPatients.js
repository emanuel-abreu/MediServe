const Patient = require("../../models/patient");

async function listPatient(req, res) {
  try {
    const registeredPatient = await Patient.findOne({
      where: { id: req.params.id },
    });
    if (!registeredPatient) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do paciente, verifique se foi informado corretamente",
      });
    }
    res.status(200).json(registeredPatient);
  } catch (error) {
    res.status(500).json({
      message: "Não conseguimos processar sua solicitação",
    });
  }
}

module.exports = listPatient;
