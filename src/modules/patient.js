const { Sequelize } = require("sequelize");
const connection = require("../database/labmedicinebd");

const Patient = connection.define("patient", {
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
  emergency_contact: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  allergy_list: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  specific_care_list: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  agreement: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  status: {
    type: Sequelize.ENUM([
      // Boa prática deixar em caixa alta
      "AGUARDANDO_ATENDIMENTO",
      "EM_ATENDIMENTO",
      "ATENDIDO",
      "NAO_ATENDIDO",
    ]),
  },
  total_of_services: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Patient;
