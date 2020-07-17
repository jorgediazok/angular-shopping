const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

require("./database");

app.set("secretsecretword", process.env.SECRET_KEY);
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/index"));

app.listen(3000);
console.log("Server on Port", 3000);
