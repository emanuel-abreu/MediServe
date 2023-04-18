const Patient = require("../../modules/patient");

async function updatePatient(req, res) {
  try {
    const registeredPatient = await Patient.findByPk(req.params.id);
    if (!registeredPatient) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do paciente, verifique se foi informado corretamente",
      });
    }

    registeredPatient.name = req.body.name || registeredPatient.name;
    registeredPatient.gender = req.body.gender || registeredPatient.gender;
    registeredPatient.date_of_bith =
      req.body.date_of_bith || registeredPatient.date_of_bith;
    registeredPatient.cpf = req.body.cpf || registeredPatient.cpf;
    registeredPatient.phone = req.body.phone || registeredPatient.phone;
    registeredPatient.emergency_contact =
      req.body.emergency_contact || registeredPatient.emergency_contact;
    registeredPatient.allergy_list =
      req.body.allergy_list || registeredPatient.allergy_list;
    registeredPatient.specific_care_list =
      req.body.specific_care_list || registeredPatient.specific_care_list;
    registeredPatient.agreement =
      req.body.agreement || registeredPatient.agreement;

    await registeredPatient.save();
    res.status(200).json(registeredPatient);
  } catch (error) {
    res.status(400).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

async function updateStatusPatient(req, res) {
  try {
    const registeredPatient = await Patient.findByPk(req.params.id);
    if (
      ![
        "AGUARDANDO_ATENDIMENTO",
        "EM_ATENDIMENTO",
        "ATENDIDO",
        "NAO_ATENDIDO",
      ].includes(req.body.status)
    ) {
      return res.status(404).json({
        message: "Status inválido, verifique se foi informado corretamente",
      });
    }

    registeredPatient.status = req.body.status;
    await registeredPatient.save();
    res.status(200).json(registeredPatient);
  } catch (error) {
    res.status(400).json({
      message: "Não conseguimos processar a sua solicitação",
    });
  }
}

module.exports = { updatePatient, updateStatusPatient };