const Doctor = require("../../models/doctor");

async function listDoctor(req, res) {
  try {
    const registeredDoctor = await Doctor.findOne({
      where: { id: req.params.id },
    });
    if (!registeredDoctor) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do médico(a), verifique se foi informado corretamente",
      });
    }
    res.status(200).json(registeredDoctor);
  } catch (error) {
    res.status(500).json({
      message: "Não conseguimos processar sua solicitação",
    });
  }
}

module.exports = listDoctor;
