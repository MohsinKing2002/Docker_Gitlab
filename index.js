const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Server is running OK !",
  });
});

app.get("/greet", (req, res) => {
  const name = req.query.name;

  const date = new Date().getHours();
  let msg = "";
  if (date < 12) msg = "Good Morning " + name;
  else if (date < 17) msg = "Good Afternoon " + name;
  else if (data < 21) msg = "Good Evening " + name;
  else msg = "Good Night " + name;

  res.json({
    status: true,
    message: msg,
  });
});

app.listen(port, () => {
  console.log("server is running...");
});