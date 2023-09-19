require("dotenv").config();
require("express-async-errors");
const express = require("express");
const taskRouter = require("./routes/tasks");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const connect = require("./db/connect");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/api/v1/tasks", taskRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
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
