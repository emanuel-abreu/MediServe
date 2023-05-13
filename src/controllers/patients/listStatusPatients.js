const Patient = require("../../models/patient");

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

module.exports = listStatusPatients;
