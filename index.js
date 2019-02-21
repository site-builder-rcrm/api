const express = require('express')
const app = express()
const port = 3000

const sitesApi = require('./routes/sites');

app.get('/', (req, res) => res.send('Base API route!'));

app.use('/sites', sitesApi);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))