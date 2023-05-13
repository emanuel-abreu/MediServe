const Doctor = require("../../models/doctor");

async function updateStatusDoctor(req, res) {
  try {
    const registeredDoctor = await Doctor.findByPk(req.params.id);
    if (!registeredDoctor) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do médico, verifique se foi informado corretamente",
      });
    }

    if (!["ATIVO", "INATIVO"].includes(req.body.status)) {
      return res.status(400).json({
        message: "Status inválido, verifique se foi informado corretamente",
      });
    }

    registeredDoctor.status = req.body.status;
    await registeredDoctor.save();
    res.status(200).json(registeredDoctor);
  } catch (error) {
    res.status(500).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

module.exports = updateStatusDoctor;
