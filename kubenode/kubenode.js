const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// parsing request of content-type as application/json
app.use(bodyParser.json());

// import routes
const employeeRoutes = require('./routes/employees');
app.use('/employees', employeeRoutes);

// connect to db
const DB_CONNECTION = 'mongodb://localhost:27017/employeedb';
mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to db');
    }).catch(err => {
        console.log('error while connecting to db', err);
    });

// start app
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});