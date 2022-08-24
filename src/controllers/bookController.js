const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
const createBook1= async function (req, res) {
    let book = req.body

    
    if(!book.author) {
        return res.send({status: false, msg: "author id is a mandatory field"})
    }

    
    let author = await authorModel.findById(book.author)
    if(!author) {
        return res.send({status: false, msg: "Author id is not valid"})
    }

    
    if(!book.publisher) {
        return res.send({status: false, msg: "Publisher id is a mandatory field"})
    }

    
    let publisher = await publisherModel.findById(book.publisher)
    if(!publisher) {
        return res.send({status: false, msg: "Publisher id is not valid"})
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getAllDetails = async function (req, res) {
    let allBooks = await bookModel.find().populate("author_id", "publisher")
    res.send({data: allBooks})

}

const updateSpecificBooks = async function(req, res) {
   

    let requiredPublishers = 
    await publisherModel.find({$or: [{name: "Penguin"},{name: "HarperCollins"}]}, {_id: 1})
    
    let requiredPublisherIds = [] 
    for (let i = 0; i < requiredPublishers.length; i++) {
        requiredPublisherIds.push(requiredPublishers[i]._id)
    }

    let updatedBooks = await bookModel.updateMany({publisher : {$in: requiredPublisherIds}}, {isHardCover: true}, {new: true})
    res.send({data: updatedBooks})
}

const priceUp = async function(req, res){
    let findRate = await authorModel.find({rating : {$gt : 3.5}}).select({_id : 1});
    let findRate1 = findRate.map(x => x["_id"]);
    let updatePrice = await bookModel.updateMany({author_id : {$in:(findRate1) }}, {$inc :{ price : +10}}, {new : true});
    return res.send({msg : updatePrice});
}
module.exports.createBook= createBook
module.exports.createBook1= createBook1
module.exports.getAllDetails = getAllDetails
module.exports.updateSpecificBooks = updateSpecificBooks
module.exports.priceUp = priceUp
// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }


// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
