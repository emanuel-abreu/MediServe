const Patient = require("../../modules/patient");

async function listPatient(req, res) {
  try {
    const registeredPatient = await Patient.findByPk(req.params.id);
    res.status(200).json(registeredPatient);
  } catch (error) {
    res.status(404).json({
      message:
        "Não encontramos o cadastro do paciente, verifique se foi informado corretamente",
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
      res.status(200).json(filteredPatients);
    }
    res.status(200).json(allPatients);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = { listPatient, listStatusPatients };
