const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Routes
const authRoutes = require("./routes/AuthRoute");


const app = express();

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/auth", authRoutes);


dotenv.config();
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));
