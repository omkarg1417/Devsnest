
var express = require('express');
var path = require('path');

 // To stream video
app.use('/stream', require("./routes/stream"));

// To stripe payment
app.use('/stripe', require("./routes/stripe"));

// To search
app.use('/search', require("./routes/search"));


app.listen(3000, ()=> {
  console.log("Listening on port 3000");
});
