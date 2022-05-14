import express from "express";
import axios from "axios";

const app = express();

app.get("/", async (req, res) => {
  try {
    const { data } = await axios.get("https://wswork.com.br/cars.json");

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Server running on http://localhost:3333");
});
