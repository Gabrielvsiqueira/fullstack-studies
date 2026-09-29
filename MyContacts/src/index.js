const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello Wolrd!");
});

app.listen(3000, () => console.log("🔥Server started http://localhost:3000"));
