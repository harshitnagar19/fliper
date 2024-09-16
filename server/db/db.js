const mongoose = require('mongoose');

// ******************************add database url below***********************************************

MONGODB_URI = 'mongodb+srv://nharshit216:Reena%40123@cluster0.ohdfl.mongodb.net/'                   
mongoose.connect(MONGODB_URI).then(res => { 
    console.log("connected to database server successfully")
}).catch(err => {
    console.log("error while connecting  to dataBase",err)
}) 
   