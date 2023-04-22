const { Sequelize } = require("sequelize");
const connection = require("../database/labmedicinebd");

const Doctor = connection.define("doctor", {
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
  formation_institution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  crm_registration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  clinical_expertise: {
    type: Sequelize.ENUM([
      "CLINICO_GERAL",
      "ANESTESISTA",
      "DERMATOLOGIA",
      "GINECOLOGIA",
      "NEUROLOGIA",
      "PEDIATRIA",
      "PSIQUIATRIA",
      "ORTOPEDIA",
    ]),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM(["ATIVO", "INATIVO"]),
    defaultValue: "ATIVO",
  },

  total_of_services: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Doctor;
