const sideRouter = require('./side');
const newsRouter = require('./news');
const courseRouter = require('./courses');

function route(app) {
    app.use('/course', courseRouter);

    app.use('/news', newsRouter);

    app.use('/', sideRouter);
}

module.exports = route;
