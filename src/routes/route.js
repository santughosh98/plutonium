const express = require('express');
const abc = require('../introduction/intro');
const Frist = require('../logger/logger');//creating require.for welcome.function
const Welcome= require('../logger/logger');
const second = require('../Util/halper');// creating require for second task
const Third = require('../Validator/formatter');// creating require for third task
const router = express.Router();

router.get('/test-me', function (req, res){
    console.log('My batch is', abc.name)
    abc.printName()
    Frist.welcome() //we are calling welcome funtion in route]
second.printDate()//we are calling  data function
second.printMonth()
second.getBatchinfo()
Third.Allprogram()//we are calling third fruntion
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason