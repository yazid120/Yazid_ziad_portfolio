const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRouter");

const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Application listening at port ${PORT}`);
});