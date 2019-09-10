const express = require("express");

const app = express();

const apiRouter = express.Router();

app.use("*", function logGetRequests(req, res, next) {
  console.log("Someone made a request with the GET method");
  next();
});

apiRouter.get("/", function(req, res) {
  res.send("triggered by GET /api/");
});

apiRouter.post("/add", function(req, res) {
  res.send("triggered by POST /api/add");
});

app.use("/api", apiRouter);

app.get("/", function(req, res) {
  res.send("index page, triggered by GET /");
});

const PORT = 8080;

app.listen(PORT, function() {
  console.log(`The server is running on port ${PORT}`);
});
