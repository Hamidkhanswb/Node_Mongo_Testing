var express = require('express');
const cors = require('cors')

const customErrorHanlder = require('./utils/errorHandler/customErrorHandler');
require('dotenv').config();
const router = require('./routes/index');
const db = require('./models/index')

var app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connection
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
    });

// routes
app.use(router);

// page not found 
app.use((req, res, next) => {
    res.send({
        message: 'Page not found'
    })
});

// custom error handler middleware
app.use(customErrorHanlder)

// server listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});