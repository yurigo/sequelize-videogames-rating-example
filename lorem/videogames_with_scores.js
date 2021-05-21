const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('videogames_with_scores', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    score: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'videogames_with_scores',
    timestamps: false
  });
};
