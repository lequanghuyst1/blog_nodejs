const Course = require('../models/Course');
const { mongooseToObject } = require('../../until/mongoose');
class CourseController {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //[GET] /course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /course/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.save().then(() => res.redirect('/'));

        //res.send(req.body);
    }
}

module.exports = new CourseController();
