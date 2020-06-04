const express = require('express');

const app = express();

app.use(express.static('./dist/shullistapp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/shullistapp/'}),
);

app.listen(process.env.PORT || 8080);