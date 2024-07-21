const express = require('express');
const path = require('path');
const app = express();
const port = 7000;
const hostname = '127.0.0.1';


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"templates/index.html"));
});

app.listen(port, () => {
    console.log(`http://${hostname}:${port}/`);
});