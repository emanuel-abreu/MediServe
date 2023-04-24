const Nurse = require("../../models/nurse");

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

    if (req.body.date_of_bith === "") {
      return res.status(400).json({
        message:
          "O campo 'Data de nascimento' é obrigatório e deve ser preenchido corretamente.(Ex: MM/DD/AAAA)",
      });
    }
    if (req.body.formation_institution === "") {
      return res.status(400).json({
        message:
          "O campo 'Instituição de formação' é obrigatório e deve ser preenchido corretamente.",
      });
    }
    if (req.body.cofen_registration === "") {
      return res.status(400).json({
        message:
          "O campo 'Registro COFEN' é obrigatório e deve ser preenchido corretamente.",
      });
    }

    await registeredNurse.save();
    res.status(200).json(registeredNurse);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

module.exports = updateNurse;
