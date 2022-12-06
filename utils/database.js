import mongoose from "mongoose";
(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/db");
    console.log("DB connection established");
  } catch (err) {
    console.log("Error connecting to MongoDB", err.messages);
  }
})();
