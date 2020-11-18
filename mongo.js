const mongoose = require('mongoose')

module.exports = async () => {
    await mongoose.connect('mongodb+srv://NewJumper:56XG7Yq3ZWNQMhdf@futurebot.xpqey.mongodb.net/Data', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}