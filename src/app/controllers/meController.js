const Course = require('../models/Course'); // Model (dạng cấu trúc dữ liệu) bạn muốn lấy từ db
const { mutipleMongooseToObject } = require('../../util/mongoose'); // require tool để chuyển dữ liệu nhận từ db sang object
class meController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({}) // findOne để lấy dữ liệu trong db
            //Khi promise hoàn thành
            .then((courses) => {
                courses = mutipleMongooseToObject(courses);
                res.render('me/storedCourses', {
                    // Đối số thứ nhất là đường dẫn đến file views
                    courses, // Đối số thứ hai là dữ liệu muốn chuyển sang file views
                });
            }) // biến courses nhận giá trị trả về từ promise và được chuyển sang dạng object
            //khi promise không hoàn thành
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({}) // findDeleted để lấy dữ liệu trong db
            //Khi promise hoàn thành
            .then((courses) => {
                courses = mutipleMongooseToObject(courses);
                res.render('me/trashCourses', {
                    // Đối số thứ nhất là đường dẫn đến file views
                    courses, // Đối số thứ hai là dữ liệu muốn chuyển sang file views
                });
            }) // biến courses nhận giá trị trả về từ promise và được chuyển sang dạng object
            //khi promise không hoàn thành
            .catch(next);
    }
}

module.exports = new meController();
