const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(morgan("dev"));
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app
  .get("/upload", (req, res) => {
    res.send("you need to use POST method to send files");
  })
  .post("/upload", upload.single("attachment"), (req, res) => {
    console.dir(req.file);
    res.json({ id: req.file.filename });
  });

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
