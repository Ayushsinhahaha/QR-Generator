const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const port = process.env.port || 3000;
const qrcode = require("qrcode");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/scan", (req, res) => {
  const inputText = req.body.text;
  console.log(inputText);
  qrcode.toDataURL(inputText,(err,src)=>{
    res.render('scan',{
        qrcode:src,
    })
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
