require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())

const Post = require('./models/Posts')

app.post('/create', async (req, res) => {
    try {
        const { title, content } = req.body
        const post = await Post.create({ title, content })
        res.send(post)    
    } catch(err) {
        res.status(400).send({})
    }
})

app.get('/read', async (req, res) => {
    try {
        const posts = await Post.find({})
        res.send(posts)    
    } catch(err) {
        res.status(400).send({})
    }
})

app.get('/read/:postId', async (req, res) => {
    try {
        const postId = req.params.postId
        const post = await Post.findById(postId)
        res.send(post)    
    } catch(err) {
        res.status(400).send({})
    }
})

app.patch('/update/:postId', async (req, res) => {
    try {
        const postId = req.params.postId
        const { title, content } = req.body
        const post = await Post.findByIdAndUpdate(postId, { title, content }, { new: true })
        res.send(post)    
    } catch(err) {
        res.status(400).send({})
    }
})

app.delete('/delete/:postId', async (req, res) => {
    try {
        const postId = req.params.postId
        await Post.findByIdAndDelete(postId)
        res.send({ msg: 'successfully deleted' })    
    } catch(err) {
        res.status(400).send({})
    }
})

app.listen(5000, () => console.log('>> server running on port 5000'))
