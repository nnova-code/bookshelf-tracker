const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema({
    genre: {type: String, required: true},
    format: {type: String, required: true},
    author: { type: String, required: true },
    title: { type: String, required: true },
    enteredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    datePurchased: { type: Date },
    onLoan: { type: Boolean}
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;