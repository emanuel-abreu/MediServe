const Doctor = require("../../modules/doctor");

async function updateDoctor(req, res) {
  try {
    const registeredDoctor = await Doctor.findByPk(req.params.id);
    if (!registeredDoctor) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do médico, verifique se foi informado corretamente",
      });
    }

    registeredDoctor.name = req.body.name || registeredDoctor.name;
    registeredDoctor.gender = req.body.gender || registeredDoctor.gender;
    registeredDoctor.date_of_bith =
      req.body.date_of_bith || registeredDoctor.date_of_bith;
    registeredDoctor.cpf = req.body.cpf || registeredDoctor.cpf;
    registeredDoctor.phone = req.body.phone || registeredDoctor.phone;
    registeredDoctor.formation_institution =
      req.body.formation_institution || registeredDoctor.formation_institution;
    registeredDoctor.crm_registration =
      req.body.crm_registration || registeredDoctor.crm_registration;

    await registeredDoctor.save();
    res.status(200).json(registeredDoctor);
  } catch (error) {
    res.status(400).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

async function updateStatusDoctor(req, res) {
  try {
    const registeredDoctor = await Doctor.findByPk(req.params.id);
    if (!["ATIVO", "INATIVO"].includes(req.body.status)) {
      return res.status(404).json({
        message: "Status inválido, verifique se foi informado corretamente",
      });
    }

    registeredDoctor.status = req.body.status;
    await registeredDoctor.save();
    res.status(200).json(registeredDoctor);
  } catch (error) {
    res.status(400).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

module.exports = { updateDoctor, updateStatusDoctor };
