const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost/soca', { useNewUrlParser: true })
};