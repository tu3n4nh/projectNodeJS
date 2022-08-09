const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/projectNodeJS');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };
