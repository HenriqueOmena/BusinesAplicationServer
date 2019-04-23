const mongoose = require('mongoose')
const Schema   = mongoose.Schema

let transactionSchema = new Schema({
    userId         : mongoose.SchemaTypes.ObjectId,
    transactionDate: { type: Date,   required: true },
    transactionType: { type: String, required: true },
    desciption     : { type: String, required: true },
    charge         : { type: Number, default : 0 },
    deposit        : { type: Number, default : 0 },
    notes          : { type: String, default : ''},
    createdOn      : { type: Date,   default : Data.now },
})

const TransAction = mongoose.model('Transaction', transactionSchema)

module.exports = TransAction
