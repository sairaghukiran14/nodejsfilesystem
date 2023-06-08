const express = require("express");
const fs = require("fs");
const { format } = require("date-fns");

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.get(`/:foldername/create`, (req, res) => {
  try {
    const hello = req.params.foldername;
    if (!fs.existsSync(hello)) {
      fs.mkdir(`./${hello}`, (err) => {
        console.error(err);
      });
    }
    const date = new Date();
    const formatedate = format(date, "yyyy-MM-dd-HH:mm:ss");

    let filename = date.getDate();
    fs.writeFile(
      `./${hello}/${formatedate.toString()}.txt`,
      date.toString(),
      (err) => {
        if (err) console.log(err);
      }
    );
    res.send("File created Successfully");
  } catch (err) {
    console.log(err);
  }
});
app.get(`/:fname/display`, (req, res) => {
  const hello = req.params.fname;
  fs.readdir(`${hello}`, (err, files) => {
    if (err) console.log(err);
    if (files) {
      res.send(files);
    }
  });
});
app.get(`/:foldername`, (req, res) => {
  fs.mkdir(`./${req.params.foldername}`, (err) => {
    if (err) console.log(err);
  });
  res.send(req.params.foldername + " created Successfully");
});

app.listen(3000);
