const sideRouter = require('./side');
const newsRouter = require('./news');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', sideRouter);
}

module.exports = route;
