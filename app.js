import express from "express";
import "./api/utils/database";
import { taskRoutes } from "./api/routes";

const app = express();
app.use(express.json());

app.use("/tasks", taskRoutes);

app.use("/", (req, res) => {
  return res.status(404).send({ success: false, message: "Page not found" });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
