const express = require('express');
const router = express.Router();
const PostMessage = require('../models/postMessage');


//routes
router.get('/', async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
});
router.post('/', async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save((error, doc) => {
            if (error) return console.error(error);
            console.log("Document Inserted Succesfully");
        });

        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({
            message: err.message
        });
    }
});

router.patch('/:id', async (req,res) => {
    const { id: _id } = req.params;
});

module.exports = router;