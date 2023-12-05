

const { error } = require("console")
const fs = require("fs")


     //Read
fs.readFile('abc.txt',(error,data) =>
{
    if(error){
        console.log(error)
    }
    else console.log(data.toString())
})

        //write
let content = "this is a content written by fs using node"
fs.writeFile("new_file.txt",content,(error)=>
{
    if(error) console.log(error)
    else console.log("Saved")
})

          //append

fs.appendFile("./abc.txt","new Content",(error)=>
{
    if(error) console.log("error "+error)
    else  console.log("Saved")
})


        //delete file
// fs.unlink("./abc.txt",(error) =>
// {
//     if(error) console.log("error "+error)
//     else  console.log("Deleted haha")
// })