const router = require('express').Router();
let Book = require('../models/book.model');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { genre, format, author, title} = req.body;
    const enteredBy = req.params;
    const id = User.id;
    const datePurchased = Date.parse(req.body.datePurchased);
    const onLoan = req.body.onLoan;
    
    const newBook = new Book({
        genre,
        format,
        author,
        title,
        enteredBy,
        id,
        datePurchased,
        onLoan

    });

    newBook.save()
    .then(() => res.json('Book shelved!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
