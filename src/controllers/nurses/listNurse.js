const Nurse = require("../../models/nurse");

async function listNurse(req, res) {
  try {
    const registeredNurse = await Nurse.findOne({
      where: { id: req.params.id },
    });
    if (!registeredNurse) {
      return res.status(404).json({
        message:
          "Não encontramos o cadastro do enfermeiro(a), verifique se foi informado corretamente",
      });
    }
    res.status(200).json(registeredNurse);
  } catch (error) {
    res.status(500).json({
      message: "Não conseguimos processar sua solicitação",
    });
  }
}

async function listAllNurses(req, res) {
  try {
    const allNurses = await Nurse.findAll();

    res.status(200).json(allNurses);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação" });
  }
}

module.exports = { listNurse, listAllNurses };
