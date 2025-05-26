const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_PASS = process.env.MONGO_PASS;

const mongoURI = `mongodb+srv://shivanshu:<db_password>@inotebook.tgnlr6j.mongodb.net/?retryWrites=true&w=majority&appName=iNotebook`

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;