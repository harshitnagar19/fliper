const mongoose = require('mongoose');

// ******************************add database url below***********************************************

const MONGODB_URI = 'mongodb+srv://nharshit216:Reena%40123@cluster0.ohdfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to database server successfully");
  })
  .catch(err => {
    console.log("error while connecting to database", err);
  });
   