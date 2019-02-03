const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

let app = express();

app.set('port', 3000);

mongoose.connect('mongodb://admin:admin12@ds016148.mlab.com:16148/sort-bot-articles', { useNewUrlParser: true })
    .then(db => console.log('[OK] DB is connected'))
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/records', require('./routes/record'));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});