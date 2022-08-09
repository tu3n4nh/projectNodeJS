const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class courseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }); // đối số thứ 2 đưa course vào để truyền biến course qua views
            }) // mongooseToObject(course) để có thể truy cập vào các thuộc tính của course
            .catch(next);
    }
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create'); //
    }
    // [POST] /courses/store
    store(req, res, next) {
        // res.send(req.body); // để kiểm tra request gửi đi có form data như nào
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect(`/`))
            .catch(next);
    }
}

module.exports = new courseController();
