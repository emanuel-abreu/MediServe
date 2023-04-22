const Patient = require("../../modules/patient");

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

async function listStatusPatients(req, res) {
  try {
    const allPatients = await Patient.findAll();
    const specifiedStatus = req.query.status;
    if (specifiedStatus) {
      const filteredPatients = await Patient.findAll({
        where: {
          status: req.query.status,
        },
      });
      return res.status(200).json(filteredPatients);
    }
    res.status(200).json(allPatients);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = { listPatient, listStatusPatients };
