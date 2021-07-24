const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')


const router = express.Router()

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})

router.get('/blog', (req, res) => {
    res.render('blogHome', {
        blogs: blogs
    })
})

router.get('/blogpost/:slug', (req, res) => {
    console.log(req.params.slug)
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})


module.exports = router