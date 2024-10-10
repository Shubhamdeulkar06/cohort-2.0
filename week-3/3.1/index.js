const express = require("express");
const app = express();
// app.use(express.json);

app.get("/health", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  // this is dum way of validation
  if (username != "shubham" || password != "pass") {
    res.status(400).json({
      msg: "somthings is wrong with your inputs",
    });
    return;
  }
  // do some standard logic here
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "somthings is wrong with your id",
    });
    return;
  }
  res.json({
    msg: "Your kidney is fine",
  });
});

app.listen(3000, () => {
  console.log("listening.....");
});
