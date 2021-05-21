const { sequelize } = require("../database/connection");

const {
    users: User,
    videogames_with_scores: VideogameWithScore,
    scores: Score,
} = require("../generated/init-models")(sequelize);

async function all(req, res, next) {
    const users = await User.findAll({
        include: [
            {
                model: VideogameWithScore,
                through: {
                    attributes: [],
                },
                include: [
                    {
                        model: User,
                        attributes: ["id"],
                        through: {
                            attributes: ["score"],
                        },
                    },
                ],
            },
        ],
    });
    res.json(users);
}

async function get(req, res, next) {
    const users = await User.findByPk(req.params.id, {
        exclude: ["password"],
        include: [
            {
                model: VideogameWithScore,
                as: "videogames_with_scores",
            },
            {
                model: Score,
                as: "scores",
            },
        ],
    });
    res.json(users);
}

async function post(req, res, next) {
    const bcrypt = require("bcrypt");
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;

    bcrypt.hash(myPlaintextPassword, saltRounds, async (err, hash) => {
        if (err)
            next({
                status: 500,
                error: "error al encriptar el password",
                trace: err,
            });
        req.body.password = hash;
        try {
            const user = await User.create(
                {
                    login: req.body.login,
                    name: req.body.name,
                    password: req.body.password,
                    age: req.body.age,
                },
                { fields: ["login", "name", "password"] }
            );

            res.json(user);
        } catch (ex) {
            next({
                status: 500,
                error: "error al insertar el usuario",
                trace: ex,
            });
        }
    });
}

module.exports = { all, get, post };
