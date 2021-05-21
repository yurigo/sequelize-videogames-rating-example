const router = require("express").Router();

const c = require("../controller/users.controller");

router.get("/", c.all);
router.post("/", c.post);
router.get("/:id", c.get);

module.exports = router;
