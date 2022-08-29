const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let userBody = req.body;
  let user = await userModel.create(userBody);
  res.send({ msg: user });
}

const loginUser = async function (req, res) {
  let userBody2 = req.body;
  let user = userBody2.emailId;
  let pass = userBody2.password;
  let validemailpass = await userModel.findOne({ emailId: user, password: pass });
  if (!validemailpass) return res.send({ status: false, msg: "email or password is wrong" });
  let uniqueid = validemailpass._id;
  let token1 = jwt.sign({
    _id: uniqueid,
    userid: user,
    password: pass
  },
    "Winners-Never-Quit"
  )
  res.header({ "x-auth-token": token1 });
  res.send({ status: true, data: { token: token1 } });
}

//""eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzBkMTJhYzY0YzZlYjY0ODI5N2EwZmMiLCJ1c2VyaWQiOiJyYWp1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicmFqdTEyMyIsImlhdCI6MTY2MTgwMTM1NH0.Hya0sa62sSWwHYMJxWb6qgRLvlPPEYotc5wfoO6QsgU"

const getUserData = async function (req, res) {
  let userid = req.params.userId;
  let validUser = await userModel.findById(userid);
  if (!validUser) return res.send({ status: false, msg: "User is not present" });
  return res.send({ status: true, msg: validUser })

}


const updateUserdata = async function (req, res) {
  let userid1 = req.params.userId;
  let User = await userModel.findById(userid1);
  if (!User)
    return res.send({ status: false, msg: "User is not present" });


  let userData = req.body
  let updateUserData = await userModel.findOneAndUpdate({ _id: userid1 }, userData, { new: true });
  res.send({ status: true, msg: updateUserData });

}

const deleteUser = async function(req,res){
  let delUserid = req.params.userId;
  let User3 = await userModel.findById(delUserid);
  if (!User3 ) return res.send({ status: false, msg: "User is not present" });
  
  let deleteUserData = await userModel.findOneAndUpdate({ _id: delUserid }, {isDeleted : true}, { new: true });
  res.send({ status: true, msg: deleteUserData });

}




module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData
module.exports.updateUserdata = updateUserdata
module.exports.deleteUser = deleteUser