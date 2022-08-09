const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-maker');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, required: true },
        level: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
