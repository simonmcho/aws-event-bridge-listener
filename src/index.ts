import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (_req, res) => {
  console.log("working!");
  res.send("HELLO! Event Bridge listener running with events");
});

app.post("/", (req, res) => {
  console.log({
    req,
    body: req.body,
  });
  res.send("HELLO! post to / worked!");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
