const express = require("express");
const corsMiddleWare = require("cors");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/users");
const weaponRouter = require("./routers/weapons")
const elementRouter = require("./routers/elements")
const authMiddleWare = require("./auth/middleware");
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000;

const app = express();

/**
 * Middlewares
 *
 * It is advisable to configure your middleware before configuring the routes
 * If you configure routes before the middleware, these routes will not use them
 *
 */
app.use(corsMiddleWare());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

// Routes
app.use("/", authRouter);
app.use("/user", userRouter)
app.use("/weapon", weaponRouter)
app.use("/element", elementRouter)

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/path/to/index.html")
})


// Listen for connections on specified port (default is port 4000)
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
