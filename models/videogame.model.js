const { sequelize } = require("../database/connection");
const { DataTypes, Model } = require("sequelize");

// const { User } = require("./user.model");
// const { Score } = require("./score.model");

class Videogame extends Model {}

Videogame.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    timestamps: false,
    sequelize, // We need to pass the connection instance
    // modelName: "Videogame", // We need to choose the model name
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

module.exports = { Videogame };
