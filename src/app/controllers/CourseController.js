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
    }
    //[GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).then((course) => {
            res.render('courses/edit', {
                course: mongooseToObject(course),
            });
        });
        console.log(req.params)
    }

    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
