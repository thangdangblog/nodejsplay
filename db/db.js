const mongoose = require('mongoose');

const urlDatabase = 'mongodb://localhost:27017/UsersManage';

mongoose.connect(urlDatabase,{useNewUrlParser: true,useUnifiedTopology: true});

module.exports = mongoose;