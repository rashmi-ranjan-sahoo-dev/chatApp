const mongoose = require("mongoose");

const chatShema = new mongoose.Schema({
    from : {
        type : String,
         require : true
    },
    to : {
        type : String,
        require : true
    },
    msg : {
        type : String,
        maxlength : 50
    },
    created_at : {
        type : Date,
        require : true
    }
});

const Chat = mongoose.model("Chat", chatShema);

module.exports = Chat;