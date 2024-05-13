


const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/harryKart");

    // check database connected or not
       connect.then(() => {

        console.log("Database connected successfully"); 
})
.catch((e) => {

console.log("Database cannot be connected");
});

// create a schema


const studentSchema = new mongoose.Schema({
    order: String,
    // Quantity: Number
});

//collection part








const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    order: String

});


const items = new mongoose.model('blue ', studentSchema);
module.exports = items ;



const users = new mongoose.model('red', LoginSchema );
module.exports = users;
