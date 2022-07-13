import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (_req, res) => {
  console.log("adding console for ebs logging check");
  res.send("HELLO! Event Bridge listener running");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
