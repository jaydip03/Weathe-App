const express = require("express");
const path = require("path");
var cons = require('consolidate');
const engine = require('express-engine-jsx');
const hbs = require('hbs');
const app = express();
const port = (process.env.PORT = 8000);

// public static path
const static_path = path.join(__dirname, "../public");

// app.set("view engine", "hbs");


// html engine
app.engine('html', cons.swig)
        
// app.set('views', path.join(__dirname, '../public'));

app.set('view engine', 'html');

// jsx engine

// app.set('view engine', 'ejs');

// app.set('view engine', 'jsx');

// app.engine('jsx', engine);

// end

app.use(express.static(static_path))

// routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/*", (req, res) => {
  res.render("error", {
    errorMsg: ` Page Not Found`
  });
});

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
