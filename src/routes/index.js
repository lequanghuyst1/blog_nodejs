const sideRouter = require('./side');
const newsRouter = require('./news');
const courseRouter = require('./courses');
const meRouter = require('./me');
function route(app) {
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);

    app.use('/news', newsRouter);

    app.use('/', sideRouter);
}

module.exports = route;
