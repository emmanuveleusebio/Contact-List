const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("mongoDb connected")
    } catch (error) {
        console.log("error while connection mongoDb", error)
        process.exit(1);
    }
}

module.exports = connectDb;