import express from "express";

const app = express();
const PORT = 8081;

app.get("/", (_req, res) => {
  res.send("HELLO! Event Bridge listener running");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
