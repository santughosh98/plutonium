const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")

const bookController = require("../controllers/bookController")

const publisherController=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    
    res.send("My first ever api!")
})
router.post("/createBook1", bookController . createBook1)

router.post("/createAuthor", authorController.createAuthor)

router.get("/getAuthorsData", authorController. getAuthorsData)

router.post("/createBook", bookController . createBook)

// router.get("/getBooksData",bookController.getBooksData)

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getpublishersData", publisherController. getpublishersData)

router.get("/getAllDetails", bookController . getAllDetails)

router.get("/updateSpecificBooks", bookController . updateSpecificBooks)

router.get("/priceUp", bookController . priceUp)

//router.get("/getBooksWithAuthorDetails",bookController.getBooksWithAuthorDetails)

module.exports = router;