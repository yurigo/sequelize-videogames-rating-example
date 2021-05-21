var DataTypes = require("sequelize").DataTypes;
var _scores = require("./scores");
var _users = require("./users");
var _videogames = require("./videogames");

var _videogames_with_scores = require("./videogames_with_scores");

function initModels(sequelize) {
    var scores = _scores(sequelize, DataTypes);
    var users = _users(sequelize, DataTypes);
    var videogames = _videogames(sequelize, DataTypes);
    var videogames_with_scores = _videogames_with_scores(sequelize, DataTypes);

    // users.belongsToMany(videogames, {
    //   as: "videogame_videogames",
    //   through: scores,
    //   foreignKey: "user",
    //   otherKey: "videogame",
    // });
    // videogames.belongsToMany(users, {
    //   as: "user_users",
    //   through: scores,
    //   foreignKey: "videogame",
    //   otherKey: "user",
    // });
    // scores.belongsTo(users, { as: "user_user", foreignKey: "user" });
    // users.hasMany(scores, { as: "scores", foreignKey: "user" });
    // scores.belongsTo(videogames, {
    //   as: "videogame_videogame",
    //   foreignKey: "videogame",
    // });
    // videogames.hasMany(scores, { as: "scores", foreignKey: "videogame" });

    users.belongsToMany(videogames_with_scores, {
        // as: "test",
        through: scores,
        foreignKey: "user",
        otherKey: "videogame",
    });
    videogames_with_scores.belongsToMany(users, {
        // as: "test2",
        through: scores,
        foreignKey: "videogame",
        otherKey: "user",
    });

    scores.belongsTo(users, { as: "user_user", foreignKey: "user" });
    users.hasMany(scores, { as: "scores", foreignKey: "user" });

    scores.belongsTo(videogames_with_scores, {
        // as: "test3",
        foreignKey: "videogame",
    });
    videogames_with_scores.hasMany(scores, {
        // as: "test4",
        foreignKey: "videogame",
    });

    return {
        scores,
        users,
        videogames,
        videogames_with_scores,
    };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
