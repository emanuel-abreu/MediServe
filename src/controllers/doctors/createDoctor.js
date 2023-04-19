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
    };

    if (
      !doctor.date_of_bith ||
      !doctor.formation_institution ||
      !doctor.crm_registration
    ) {
      return res.status(400).json({
        message: `Data de Aniversário / 
        Instituição de graduação é obrigatório no cadastro`,
      });
    }

    const registeredDoctor = await Doctor.findOne({
      where: { cpf: doctor.cpf },
    });

    if (registeredDoctor) {
      return res
        .status(409)
        .json({ message: "Já existe um CPF com esse número." });
    }

    const newDoctor = await Doctor.create(doctor);

    res.status(201).json(newDoctor);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = createDoctor;
