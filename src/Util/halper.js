//print the current date
let printDate = function () {
    const print = new Date().getDate()
    
    console.log (print)

}
//: print the current month
function printMonth() {
    const print1 = new Date().getMonth() + 1

    console.log(print1)
  
}
//print the batch info
function getBatchinfo() {
 var week1 = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
const D =new Date()
let D1 = week1[D.getDay()]
console.log(`Batch plutonium,3rd week, ${D1} the topic being taught today is nodejs moudule`)
}


module.exports.printDate =printDate
module.exports. printMonth = printMonth
module.exports.getBatchinfo =getBatchinfo


