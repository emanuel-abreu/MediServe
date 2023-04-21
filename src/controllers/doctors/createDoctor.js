const Doctor = require("../../modules/doctor");

async function createDoctor(req, res) {
  try {
    const doctor = {
      name: req.body.name,
      gender: req.body.gender,
      date_of_bith: req.body.date_of_bith,
      cpf: req.body.cpf,
      phone: req.body.phone,
      formation_institution: req.body.formation_institution,
      crm_registration: req.body.crm_registration,
      clinical_expertise: req.body.clinical_expertise,
    };

    if (!doctor.date_of_bith) {
      return res.status(400).json({
        message: `Data de Aniversário é obrigatório no cadastro`,
      });
    } else if (!doctor.formation_institution) {
      return res.status(400).json({
        message: `
        Instituição de graduação é obrigatório no cadastro`,
      });
    } else if (!doctor.crm_registration) {
      return res.status(400).json({
        message: `
        Cadastro CRM/UF é obrigatório no cadastro`,
      });
    } else if (!doctor.clinical_expertise) {
      return res.status(400).json({
        message: `
        Especialização clínica é obrigatório no cadastro`,
      });
    }

    const registeredDoctor = await Doctor.findOne({
      where: { cpf: doctor.cpf },
    });

    if (registeredDoctor) {
      return res
        .status(409)
        .json({ message: "Já existe um CPF com esse número cadastrado." });
    }

    const newDoctor = await Doctor.create(doctor);

    res.status(201).json(newDoctor);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = createDoctor;
