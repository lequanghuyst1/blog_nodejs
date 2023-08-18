const Course = require('../models/Course');
class SideController {
    //[GET] /home
    index(req, res, next) {
        res.render('home');
        Course.find()
            .then((courses, err) => {
                res.json(courses);
            })
            .catch((err) => {
                next(err)
                res.status(400).json({ error: 'ERROR!!!' });
            });
        //res.render('home');
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SideController();
