require("dotenv").config();

const express = require("express");
const app = express();

// ROUTES
const usersRoute = require("./routes/users.route");
const videogamesRoute = require("./routes/videogames.route");

app.use(express.json());

const port = process.env.PORT || 3000;

//public
app.use("/users", usersRoute);
app.use("/videogames", videogamesRoute);

//fallback
app.all("*", (req, res, next) => {
  console.log(req.url);
  next({
    status: 404,
    error: "Not found",
  });
});

app.use((err, req, res, next) => {
  // console.log("error", err);
  res.status(err.status).json(err);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`http://localhost:${port}/users`);
  console.log(`http://localhost:${port}/users/3`);
});
