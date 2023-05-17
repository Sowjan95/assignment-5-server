/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://www.pngkey.com/png/detail/77-771372_high-school-cap-and-gown-graduation-clipart.png",
    allowNull: true
  },

  gpa: {
    type: Sequelize.DECIMAL(3, 1),
    validate: {
      min: 0.0,
      max: 4.0,
    },
    allowNull: true
  }


});

// Export the student model
module.exports = Student;