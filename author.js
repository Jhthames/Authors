const mongoose = require('mongoose');


var AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, " name is required."],
        minlength: [3, " name must be at least 3 characters long."]
    }
    
}, {timestamps: true});

var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
