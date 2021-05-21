const { sequelize } = require("../database/connection");
const { DataTypes, Model } = require("sequelize");

// const { Videogame } = require("./videogame.model");
// const { Score } = require("./score.model");

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    timestamps: false,
    sequelize, // We need to pass the connection instance
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
  }
);

// User.belongsToMany(Videogame, {
//   foreignKey: "user",
//   through: Score,
// });

// Videogame.belongsToMany(User, {
//   foreignKey: "videogame",
//   through: Score,
// });

module.exports = { User };
