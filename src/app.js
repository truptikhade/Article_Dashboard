const express = require('express');
const cors = require('cors');

const filterRoute = require('./route/filter.route');
const insightRoute = require('./route/insight.route');
const analyticsRoute = require('./route/analytics.route');

const errorhandler = require('./middleware/error.middleware');
const morgan = require('morgan');
const logger = require('./config/logger');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/insight",insightRoute);
app.use("/api/filter", filterRoute);
app.use("/api/analytic", analyticsRoute);

app.use(
    morgan('combined', {
        stream:{
            write: (message) => logger.info(message.trim())
        }
    })
);

app.use(errorhandler);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

module.exports = app;