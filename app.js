const express = require('express');
port = 3000;

const app = express();

app.get('/', (req, res) => {  // homepage, could also be subpage, like /o-nas
    res.send('Hello node, again!');
})

app.get('/kontakt', (req, res) => {
    res.send('<h1>Kontakt</h1>');
})

app.listen(port);