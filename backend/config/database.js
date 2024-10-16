const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log(`Database successfully connected ${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
