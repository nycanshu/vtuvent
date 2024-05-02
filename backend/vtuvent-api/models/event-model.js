const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    details: {
        studentCoordinators: [{
            type: String,
            required: true
        }],

        fecultyCoordinator:{
            type: String,
            required: true
        },
        venue: {
            type: String,
            required: true
        },
        eventdate: {
            type: Date,
            required: true
        },  
        imageurl: {
            type: String,
            required: true
        },
        resgisterlink: {
            type: String,
            required: true
        },
        whatsapplink:{
            type: String,
            required: true
        },  
    },
    tags: {
        type: [String],
        required: true
    },
},
{
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;