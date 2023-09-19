require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connect = require("./db/connect");
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const taskRouter = require("./routes/tasks");

app.use(express.json());
// extra packages

// routes
app.get("/", (req, res) => {
  res.send("Assignment NodeJs");
});
app.use("/api/v1/tasks", taskRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    connect(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
module.exports = app;
