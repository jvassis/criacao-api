const mongoose = require('mongoose')

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('>> mongo connected'))
    .catch(err => console.log(err))

module.exports = mongoose