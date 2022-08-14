const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/projectNodeJS', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };
