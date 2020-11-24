import express from "express";
import lunr from "lunr";

const app = express();

// const idx = lunr.Index.load(JSON.parse(data))

// lunr.Builder

app.post("/index", (req, res) => {
  console.log("Recieved index request");
});
