const express = require("express");
const connectDB = require("./config/dbConfig");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./api/routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
connectDB(process.env.MONGO_URI);
routes(app);
app.use("/", (req, res) => {
  res.send("hello word!");
});

app.listen(PORT, () => {
  console.log(`app listening on port: http://localhost:${PORT}`);
});
