const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "videogames",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      // count: {
      //   type: DataTypes.VIRTUAL,
      //   get() {
      //   }
      // },
      // score: {
      //   type: DataTypes.VIRTUAL,
      //   get() {
      //   }
      // },
    },
    {
      sequelize,
      tableName: "videogames",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "id_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
