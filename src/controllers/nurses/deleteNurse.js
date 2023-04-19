const Nurse = require("../../modules/nurse");

async function deleteNurse(req, res) {
  try {
    await Nurse.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(204).json({ message: "Excluído" });
  } catch (error) {
    res.status(404).json({ message: "Registro de enfermeiro(a) inexistente" });
  }
}

module.exports = deleteNurse;
