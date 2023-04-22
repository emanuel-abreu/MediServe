const Nurse = require("../../modules/nurse");

async function createNurse(req, res) {
  try {
    const nurse = {
      name: req.body.name,
      gender: req.body.gender,
      date_of_bith: req.body.date_of_bith,
      cpf: req.body.cpf,
      phone: req.body.phone,
      formation_institution: req.body.formation_institution,
      cofen_registration: req.body.cofen_registration,
    };

    if (!nurse.date_of_bith) {
      return res.status(400).json({
        message: "Data de Aniversário é obrigatório no cadastro",
      });
    } else if (!nurse.formation_institution) {
      return res.status(400).json({
        message: "Instituição de formação é obrigatório no cadastro",
      });
    } else if (!nurse.cofen_registration) {
      return res.status(400).json({
        message: "Cadastro COFEN/UF é obrigatório no cadastro",
      });
    }

    const registeredNurse = await Nurse.findOne({
      where: { cpf: nurse.cpf },
    });

    if (registeredNurse) {
      return res
        .status(409)
        .json({ message: "Já existe um CPF com esse número cadastrado." });
    }

    const newNurse = await Nurse.create(nurse);

    res.status(201).json(newNurse);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = createNurse;
