const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/drinks.route"));

mongoose
  .connect(
    "mongodb+srv://mans:Ibnhassan22@cluster0.ob4mg.mongodb.net/coffee-house",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    }
  )
  .then(() => {
    app.listen(4000, () => console.log("Server has been started..."));

    console.log("Подключились к БД");
  });
