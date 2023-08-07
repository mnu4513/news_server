const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


const route = require('./routes/routes');
app.use('/', route);

require('dotenv').config();
const port = process.env.PORT;

app.listen(port || 3001, function () {
    console.log('App is running on PORT', port || 3001);
});