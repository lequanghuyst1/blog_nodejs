class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }
    //[GET] /new/:slug
    show(req, res) {
        res.send('NEWS DETAILS');
    }
}

module.exports = new NewsController();
