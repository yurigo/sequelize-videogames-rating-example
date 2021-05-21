const { sequelize } = require("../database/connection");

const {
    users: User,
    videogames: Videogame,
    scores: Score,
} = require("../generated/init-models")(sequelize);

async function all(req, res, next) {
    const videogames = await Videogame.findAll();
    res.json(videogames);
}

async function get(req, res, next) {
    const videogame = await Videogame.findByPk(req.params.id);
    res.json(videogame);
}

async function post(req, res, next) {
    const videogame = await Videogame.create({
        name: req.body.name,
    });

    res.json(videogame);
}

module.exports = { all, get, post };
