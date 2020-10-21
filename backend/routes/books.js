const router = require('express').Router();
let Book = require('../models/book.model');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add/:id').post((req, res) => {
    const { genre, format, author, title, onLoan} = req.body;
    const enteredBy = req.params.id;
    const datePurchased = Date.parse(req.body.datePurchased);

    
    const newBook = new Book({
        genre,
        format,
        author,
        title,
        enteredBy,
        datePurchased,
        onLoan

    });

    newBook.save()
    .then((newBook) => {
        return User.findOneAndUpdate({_id: req.params.id}, {books: newBook._id}, { new: true});
    })
    .then(() => res.json('Book shelved!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:userId/:id').post((req, res) => {
    Book.findById(req.params.id)
    .then(book => {
        book.genre = req.body.genre;
        book.format = req.body.format;
        book.author = req.body.author;
        book.title = req.body.title;
        book.enteredBy = req.params.userId;
        book.datePurchased = Date.parse(req.body.datePurchased);
        book.onLoanbook = req.body.onLoanbook;

        book.save()
        .then(() => res.json('Book upated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
