const mongoose = require('mongoose');

function connectMongodb() {
    mongoose.connect(
        'mongodb://127.0.0.1:27017/First',
        {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    )
      .then(() => console.log('Connected!'))
      .catch(err => console.log(err));
}

module.exports = connectMongodb;