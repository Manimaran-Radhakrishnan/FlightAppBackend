import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import flighrouter from "./Routers/Flight.router.js";
import { ConnectDb } from "./Database/dbconfig.js";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/api", flighrouter);

app.get("/test", (req, res) => {
  try {
    res.status(200).json({ message: "working" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  try {
    console.log("App listening on the port >>", port);
  } catch (error) {
    console.log("App not listening", error);
  }
});

ConnectDb();
