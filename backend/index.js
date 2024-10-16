const express = require("express");
const connectDb = require("./config/database");
const cors = require("cors");
const app = express();
connectDb();

const userRouter = require("./routes/userRouted");

// Middleware
app.use(cors());
app.use(express.json());

//Router
app.use("/api/v1/auth", userRouter);

app.get("/", (req, res) => {
  res.send("App is okay");
});

app.listen(8080, () => {
  console.log("App running");
});
