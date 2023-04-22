const Patient = require("../../modules/patient");

async function createPatient(req, res) {
  try {
    const patient = {
      name: req.body.name,
      gender: req.body.gender,
      date_of_bith: req.body.date_of_bith,
      cpf: req.body.cpf,
      phone: req.body.phone,
      emergency_contact: req.body.emergency_contact,
      allergy_list: req.body.allergy_list,
      specific_care_list: req.body.specific_care_list,
      agreement: req.body.agreement,
    };

    if (!patient.date_of_bith) {
      return res.status(400).json({
        message: `Data de Aniversário é obrigatório no cadastro`,
      });
    }

    if (!patient.emergency_contact) {
      return res.status(400).json({
        message: `Contato de emergência é obrigatório no cadastro`,
      });
    }

    const registeredpacient = await Patient.findOne({
      where: { cpf: patient.cpf },
    });

    if (registeredpacient) {
      return res
        .status(409)
        .json({ message: "Já existe um CPF com esse número cadastrado." });
    }

    const newPatient = await Patient.create(patient);

    res.status(201).json(newPatient);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = createPatient;
