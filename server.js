const { Pool } = require('pg');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


console.log("Server started...")