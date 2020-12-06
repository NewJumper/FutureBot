const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://NewJumper:bNQoSD2Yddu4oXYL@futurebot.xpqey.mongodb.net/futurebot?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}