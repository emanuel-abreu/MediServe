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
  // validar e obrigtório
  date_of_bith: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
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
  crm_registration: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  clinical_expertise: {
    type: Sequelize.ENUM([
      // Boa prática deixar em caixa alta
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
