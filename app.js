const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const appRouter = require("./router/index");

const port = process.env.PORT || 5001;
const host = "0.0.0.0";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
// app.options("*", cors());
app.use(express.json());
app.use("/", appRouter);

const dbUrl = process.env.DB_URL;
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(port, host, () => {
      console.log(`Server is running in ${host}:${port}`);
    })
  )
  .catch((err) => console.log(err));
