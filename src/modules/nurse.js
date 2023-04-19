const { Sequelize } = require("sequelize");
const connection = require("../database/labmedicinebd");

const Nurse = connection.define("nurse", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  // validar e obrigtório
  date_of_bith: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  // obrigatório
  formation_institution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // obrigatório
  cofen_registration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Nurse;
