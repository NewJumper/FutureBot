require('dotenv').config()
const mongoose = require('mongoose')
const mongoPath = process.env.MONGOPATH

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    return mongoose
}