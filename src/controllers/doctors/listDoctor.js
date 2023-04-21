const Doctor = require("../../modules/doctor");

async function listDoctor(req, res) {
  try {
    const registeredDoctor = await Doctor.findByPk(req.params.id);
    if (!registeredDoctor) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do médico, verifique se foi informado corretamente",
      });
    }
    res.status(200).json(registeredDoctor);
  } catch (error) {
    res.status(500).json({
      message: "Não conseguimos processar sua solicitação",
    });
  }
}

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

module.exports = { listDoctor, listStatusDoctors };
