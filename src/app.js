const express = require('express');
const router = require('./router');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'https://ornate-babka-2a01f0.netlify.app'
}))

app.use(router);

module.exports = app;