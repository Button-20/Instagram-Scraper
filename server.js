const express = require("express");
const bud = require("basic-instagram-user-details");
const cors = require("cors");

const PORT = 4000 || process.env.PORT;

const app = express();
app.listen(PORT, () => {
  console.clear();
  console.log(`Server started on http://localhost:${PORT}`);
});

app.use(cors());

app.get("/", (req, res) => {
  res?.send("I am working.");
});

app.get("/user/:username", async (req, res) => {
  const { username } = req?.params;
  if (username) {
    console.log(await bud(username, "followers").data);
    let resp = {
      id: await (await bud(username, "id")).data,
      username: await (await bud(username, "username")).data,
      profilePic: await (await bud(username, "profilePic")).data,
    };
    res?.send(resp);
  }
  if (!username) res?.send(`Error`);
});
