const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    guest: {
        type: Number,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    hotel: {
        type: mongoose.Schema.ObjectId,
        ref: "Hotel",
        required: true
    },
    isConfirmed: { 
        type: Boolean,
        default: false,
    },
    confirmationToken: { 
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Booking", BookingSchema);