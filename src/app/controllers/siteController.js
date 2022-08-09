const Course = require('../models/Course');

class siteController {
    // [GET] /
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (err) {
                res.status(500).send({ error: err });
            } else {
                res.status(200).json(courses);
            }
        });
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
