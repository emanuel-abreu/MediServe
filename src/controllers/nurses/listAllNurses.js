const Nurse = require("../../models/nurse");

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

module.exports = listAllNurses;
