'use strict';

// [START gae_flex_quickstart]
const express = require('express');
var https = require("https");

const app = express();
var vid = null;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  if(!req.headers.host.includes("landbot")){res.status(403).send("Unauthorized");return;}
  var name = req.body[0].name;
  //console.log("1 "+sname);
  var formalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  //console.log("2 "+formalizedName);
  if(sname.length<=100){
    Landbot.exec('landbot-custom-data',{"name":formalizedName});
    Landbot.exec('landbot-custom-data',{"zname":formalizedName});
  } else {
  //console.log("Max length")
    Landbot.exec('landbot-custom-data',{"zname":null});
  }

  res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ zname: name }, null, 3));
});




// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});