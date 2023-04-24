const { Sequelize } = require("sequelize");
const connection = require("../database/labmedicinebd");
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");

const Service = connection.define("service", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // Relacionamento com Doctor
  doctorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Doctor,
      key: "id",
    },
  },
  // Relacionamento com Patient
  patientId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Patient,
      key: "id",
    },
  },
});

module.exports = Service;
