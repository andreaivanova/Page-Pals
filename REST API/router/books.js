const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { bookController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', bookController.getBooks);
router.post('/', auth(), bookController.createBook);

router.get('/:bookId', bookController.getBook);
router.post('/:bookId', auth(), postController.createPost);
router.put('/:bookId', auth(), bookController.subscribe);
router.put('/:bookId/posts/:postId', auth(), postController.editPost);
router.delete('/:bookId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), bookController.getReservations);

module.exports = router