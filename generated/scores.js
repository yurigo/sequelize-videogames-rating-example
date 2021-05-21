const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "scores",
    {
      user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      videogame: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "videogames",
          key: "id",
        },
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "scores",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "user" }, { name: "videogame" }],
        },
        {
          name: "videogames_scores_idx",
          using: "BTREE",
          fields: [{ name: "videogame" }],
        },
      ],
    }
  );
};
