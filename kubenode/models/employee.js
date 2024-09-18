const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email_address: {
        type: String,
        required: [true, 'Email address is required']
    },
    phone_number: {
        type: String
    },
    date_of_joining: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Employees', EmployeeSchema);