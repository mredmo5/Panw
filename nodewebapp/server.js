const express = require('express');
const app = express();
app.set("view engine", "ejs");


app.get('/proxy', function(req, res) {
  res.render("index.ejs");
});



app.listen(process.env.PORT || 80, function(){
    console.log("App has started");
});

