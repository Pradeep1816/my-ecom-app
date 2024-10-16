const userModel = require("../models/userModel");
const { createjwt, verifyJwt } = require("../utills/jwt");
const bcrypt = require("bcrypt");
exports.userController = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    if (!name || !email || !password) {
      return res
        .status(404)
        .send({ success: true, message: "All fields are required" });
    }
    const isEXist = await userModel.findOne({ email });

    if (isEXist) {
      return res.send("user exist");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = bcrypt.hashSync(password, salt);
    const user = await new userModel({
      name,
      email,
      password: hashedpassword,
    });
    user.save();
    const token = createjwt({ email, password });
    console.log(token);
    res.status(200).send({ success: true, message: "User Registered", token });
  } catch (error) {
    res.status(500).send({ success: false, message: "Failed", error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Email and password required" });
    }

    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .send({ success: false, message: "user does not exist" });
    }
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return res.status(400).send("password not match");
    }

    const token = createjwt({ email: email, password: user.password });

    res.status(200).send({ success: true, message: "login successful", token });
  } catch (error) {
    res.status(500).send({ success: false, message: "Login Failed", error });
  }
};
