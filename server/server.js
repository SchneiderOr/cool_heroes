require("dotenv").config({ debug: process.env.DEBUG });

const express = require("express");
const app = express();
const PORT = process.env.PORT || process.argv[2] || 5050;
const generalRouter = require("./routes");
const herosRouter = require("./routes/heros");
const logger = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(logger(process.env.NODE_ENV || "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", generalRouter);
app.use("/heros", herosRouter);

// Global error handling goes here...
app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .send({ status: err.status, error: err.error, code: err.code });
});

app.listen(PORT, () => {
  console.log(`Your hero's server runing on port ${PORT}`);
});
