const path = require("path");

const express = require("express");
const dotEnv = require("dotEnv");

const connectDB = require("./config/db");

dotEnv.config({ path: "./config/config.env" });

connectDB();

const app = express();


app.use(express.json());
app.use("/user", require("./routes/user"));
app.use((req, res) => res.status(404).json("ERROR:404"));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is runnig in port ${PORT}.`));
