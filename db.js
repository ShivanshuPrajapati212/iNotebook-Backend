const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_PASS = process.env.MONGO_PASS;

const mongoURI = `mongodb+srv://shivanshuprajapati212:${MONGO_PASS}@inotebook.fbji0.mongodb.net/?retryWrites=true&w=majority&appName=iNotebook`

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;