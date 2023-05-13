const Doctor = require("../../models/doctor");

async function listStatusDoctors(req, res) {
  try {
    const allDoctors = await Doctor.findAll();
    const specifiedStatus = req.query.status;
    if (specifiedStatus) {
      const filteredDoctors = await Doctor.findAll({
        where: {
          status: req.query.status,
        },
      });
      return res.status(200).json(filteredDoctors);
    }
    res.status(200).json(allDoctors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = listStatusDoctors;
