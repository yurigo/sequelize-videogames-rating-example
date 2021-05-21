const { sequelize } = require("../database/connection");
const { DataTypes, Model } = require("sequelize");

// const { User } = require("./user.model");
// const { Videogame } = require("./videogame.model");

class Score extends Model {}

Score.init(
  {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    timestamps: false,
    sequelize, // We need to pass the connection instance
    // modelName: "Score", // We need to choose the model name
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

module.exports = { Score };
