const mongoose = require('mongoose');

const URI ="mongodb+srv://zuk:15september@cluster0.h0nlo.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
  try{  
    await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log('db connected..!');}
  catch (error) 
  {
    console.log(error);
    process.exit(1);
  }   

};

module.exports = connectDB;