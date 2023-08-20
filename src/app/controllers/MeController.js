const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../until/mongoose');
class CourseController {
    //[GET] /me/stored/courses'
    storedCourse(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
