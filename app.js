const express = require('express');
port = 3000;

const app = express();
app.set('view engine', 'hbs');

app.get('/', (req, res) => {  // homepage, could also be subpage, like /o-nas
    res.render('index', {
        pageTitle: 'Start',
        pageBody: 'heloł'
    });
})

app.get('/kontakt', (req, res) => {
    res.send('<h1>Kontakt</h1>');
})

app.listen(port);