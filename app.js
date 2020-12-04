const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Node app</h1>');
})

app.listen(5000, () => {
    console.log('listening on port 5000!')
})