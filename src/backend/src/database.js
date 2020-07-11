const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/angular-shopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected!!"))
  .catch((err) => console.log(err));
