const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('WHERE THE ACTUAL FUCK IS CHARLES LEE?! FOR REAL!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
