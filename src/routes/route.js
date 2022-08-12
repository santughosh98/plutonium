const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

////////////////////////////playersAssignment///////////////////////
//  let players=[
//             {
//    "name": "manish",
//     "dob": "1/1/1995",
//     "gender": "male",
//     "city": "jalandhar",
//     "sports": [
//     "swimming"
//     ]
//  },
//  { "name": "M.s dhoni",
//  "dob": "7/7/1981",
//  "gender": "male",
//  "city": "bhar",
//  "sports": [
//  "swimming"]
// },
// { "name": "kartik",
// "dob": "5/11/1988",
// "gender": "male",
// "city": "New delhi",
// "sports": [
// "swimming"]
//    }
// ]
// router.post("/players", function(req, res){
//    let ele = req.body
//    for(i=0; i<players.length; i++){
//       let object = players[i]
//    if(object.name == ele.name){
//       return res.send("This player is exsit")
//    }
//    }
//    players.push(ele)
//    res.send({ msg: players , status: true})
//    })



///////////////////////voteingassingment//////////////////////////////
   let persons = [
      {
          name : "pk",
          age : 10,
          votingstatus : false
      },
      {
          name : "SK",
          age : 20,
          votingstatus : false
      },
      {
          name : "AA",
          age : 70,
          votingstatus : false
      },
      {
          name : "SC",
          age : 5,
          votingstatus : false
      },
      {
          name : "HO",
          age : 40,
          votingstatus : false
      }
  ]
  
  
  router.post('/votingage', function (req, res) {
       let arr = [];
       let age1 = req.query.age;
       for(i=0; i<persons.length; i++){
          if(persons[i].age>age1){
              persons[i].votingstatus=true;
          arr.push(persons[i])
          }
         
       }
       res.send(arr);
      })
  
module.exports = router;