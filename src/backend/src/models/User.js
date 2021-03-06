const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

//encryptar y comparar password

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = function (password) {
  //No uso funcion flecha porque voy a usar this
  return bcrypt.compare(password, this.password);
};

module.exports = model("User", userSchema);
