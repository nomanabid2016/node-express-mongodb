import express from "express";
import "./utils/database";
import { taskRoutes } from "./src/routes";

const app = express();
app.use(express.json());

app.use("/tasks", taskRoutes);

app.use("/", (req, res) => {
  return res.status(404).send({ success: false, message: "Page not found" });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
