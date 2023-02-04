require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(
    `${process.env.DATABASE}`,
    {
        dbName: 'inquera',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => (err ? console.log(err) :
        console.log('Connected to inquera database')),
);