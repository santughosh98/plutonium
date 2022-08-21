const express = require('express');
const router = express.Router();


const BookController= require("../controllers/bookController")
const authorController= require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 router.post("/createBook", BookController.createBook  )
 router.post("/createAuthor", authorController.createAuthor)
 router.get("/getBooks", authorController.getBooks  )
 router.get("/bookUpdate", authorController.bookUpdate  )
 router.get("/respectiveBooks",authorController.respectiveBooks  )



module.exports = router;