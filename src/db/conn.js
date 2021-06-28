const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/restAPI", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology:true 
}).then(() => {
    
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})