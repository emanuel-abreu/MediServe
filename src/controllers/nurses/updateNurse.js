const Nurse = require("../../modules/nurse");

async function updateNurse(req, res) {
  try {
    const registeredNurse = await Nurse.findByPk(req.params.id);
    if (!registeredNurse) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do enfermeiro(a), verifique se foi informado corretamente",
      });
    }

    registeredNurse.name = req.body.name || registeredNurse.name;
    registeredNurse.gender = req.body.gender || registeredNurse.gender;
    registeredNurse.date_of_bith =
      req.body.date_of_bith || registeredNurse.date_of_bith;
    registeredNurse.cpf = req.body.cpf || registeredNurse.cpf;
    registeredNurse.phone = req.body.phone || registeredNurse.phone;
    registeredNurse.formation_institution =
      req.body.formation_institution || registeredNurse.formation_institution;
    registeredNurse.cofen_registration =
      req.body.cofen_registration || registeredNurse.cofen_registration;

    await registeredNurse.save();
    res.status(200).json(registeredNurse);
  } catch (error) {
    res.status(400).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

module.exports = updateNurse;