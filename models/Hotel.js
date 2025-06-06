const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name can't be more than 50 characters"]
    },
    picture: {
        type: String,
        required: [true, "Please add link a picture"]
    },
    description: {
        type: String,
        required: true 
    },
    about: {
        type: String, 
        required: true
    },
    address: {
        type: String,
        required: [true, "Please add an address"]
    },
    district: {
        type: String,
        required: [true, "Please add a district"]
    },
    province: {
        type: String,
        required: [true, "Please add a province"]
    },
    postalcode: {
        type: String,
        required: [true, "Please add a postal code"],
        maxlength: [5, "Postal code can't be more than 5 digits"]
    },
    tel: {
        type: String
    },
    region: {
        type: String,
        required: [true, "Please add a region"]
    },
    size: {
        type: String, 
        default: "Small"
    },
    guests: {
        type: Number,
        default: 2,
        min: [2, "Minimum 2 guests required"],
        max: [4, "Maximum 4 guests allowed"]
    },
    dailyRate: {
        type: String,
        required: [true, "Please add a dailyRate"]
    }
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

HotelSchema.plugin(AutoIncrement, {inc_field: 'id'});

// Reverse populate with virtuals
HotelSchema.virtual('booking', {
    ref: 'Booking',
    localField: '_id',
    foreignField: 'hotel',
    justOne: false
});

HotelSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'hotel',
    justOne: false
});


module.exports = mongoose.model("Hotel", HotelSchema);