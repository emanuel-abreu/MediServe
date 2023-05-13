const Doctor = require("../../models/doctor");

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
    registeredDoctor.clinical_expertise =
      req.body.clinical_expertise || registeredDoctor.clinical_expertise;

    if (req.body.date_of_bith === "") {
      return res.status(400).json({
        message:
          "O campo 'Data de nascimento' é obrigatório e deve ser preenchido corretamente.(Ex: MM/DD/AAAA)",
      });
    } else if (req.body.formation_institution === "") {
      return res.status(400).json({
        message:
          "O campo 'Instituição de formação' é obrigatório e deve ser preenchido corretamente.",
      });
    } else if (req.body.crm_registration === "") {
      return res.status(400).json({
        message:
          "O campo 'Registro CRM' é obrigatório e deve ser preenchido corretamente.",
      });
    } else if (req.body.clinical_expertise === "") {
      return res.status(400).json({
        message:
          "O campo 'Especialidade clínica' é obrigatório e deve ser preenchido corretamente.",
      });
    }

    await registeredDoctor.save();
    res.status(200).json(registeredDoctor);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

module.exports = updateDoctor;
