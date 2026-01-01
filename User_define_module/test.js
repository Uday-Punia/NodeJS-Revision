// User defined module bascially

// const name="Uday Punia"
// console.log(name)

//module.exports= name //Using CJS module

// export default name;  //Using MJS module

// const a="Uday Punia"
// export const b=[44,5,6,3,6,9,2,8,80,5,60]
// export const obj1={
//     name:"Uday Chaudhary",
//     dsg:"Front end web developer",
//     salary:"192412",
//     City:"Haridwar",
//     State:"Uttarakhand"
// }
// export function display(){
//     console.log("In function named Display")
//     console.log(a)
//     console.log(b)
//     console.log(obj1)
    
// }
// class check{
//     show(){
//         console.log("In Class name Check")
//     }
// }
// export const obj2=new check()

// export default a

//Creating the directory basically 
//mkdir() Creating a new folder or directory 
// const fs = require("fs");
// try {
//   fs.mkdirSync("Synchronous_dir");
// } catch (error) {
//   if (error.code === "ENOENT") console.log("Folder is already exist");
//   else console.log("Folder Already Exists");
// }

//Deleting the directority basically rmdir() 
//Removing the dir basically 
// try {
//     fs.rmdirSync("Synchronous_dir")
//     console.log("File has been removed")
// } catch (error) {
//     if(error.code==="ENOENT")
//         console.log("File is Already Deleted or Path is Invalid")
// }

//writeFileSync()
// try {
//    fs.writeFileSync("Synchronous_dir/text.txt","Hello world 1\n")
//    fs.writeFileSync("Synchronous_dir/text.txt","Hello world 2\n")
//    fs.writeFileSync("Synchronous_dir/text.txt","Hello world 3\n")
//    fs.writeFileSync("Synchronous_dir/text.txt","Hello world 4\n")
//    fs.writeFileSync("Synchronous_dir/text.txt","Hello world 5\n")
//    console.log("Writing Operation has been Completed") 
// } catch (error) {
//     console.log("Path is invalid")
// }


//appendFileSync()
// try {
//    fs.appendFileSync("Synchronous_dir/text.txt","Hello world 1\n")
//    fs.appendFileSync("Synchronous_dir/text.txt","Hello world 2\n")
//    fs.appendFileSync("Synchronous_dir/text.txt","Hello world 3\n")
//    fs.appendFileSync("Synchronous_dir/text.txt","Hello world 4\n")
//    fs.appendFileSync("Synchronous_dir/text.txt","Hello world 5\n")
//    console.log("Writing Operation has been Completed") 
// } catch (error) {
//     console.log("Path is invalid")
// }

//readFileSync() :If we not use the encoding the data will return in the buffer format basically to encode we have to use the utf-8 
// try {
//     let data=fs.readFileSync("Synchronous_dir/text.txt","utf-8")
//     console.log(data)
// } catch (error) {
//     console.log("The Entered path is invalid")
// }

// fs.renameSync() : To rename the file basically in the folder or dir
// try {
//     fs.renameSync("Synchronous_dir/text.txt","Synchronous_dir/Sample.txt")
// console.log("File name has been changed")
// } catch (error) {
//     console.log("The given file is not exist kindly check")
// }

// fs.unlinkSync() This file id deleted basically 
// try {
//     fs.unlinkSync("Synchronous_dir/text.txt")
//     console.log("File has been deleted")
// } catch (error) {
//     console.log("Path is Invalid Or already deleted")
// }

//Asynchronous File System Module : 
// const { error } = require('console')
const fs=require('fs')

//mkdir() There is always a callback function is present within the mkdir function so we have to check that also

// fs.mkdir("New",(error)=>{
//     if(error){
//         if(error.code==="ENOENT")
//             console.log("Path is Invalid")
//         else
//             console.log("Folder is already Exist")
//     }
//     else{
//         console.log("Folder is created")
//     }
// })
// console.log("If this line comes up at the run time that means the dir creation taking more time so that means it is the asynchronous file system")


//rmdir()

// fs.rmdir("New",(error)=>{
//     if(error){
//         if(error.code==="ENOTEMPTY")
//             console.log("Folder is not empty")
//         else
//             console.log("Path is Invalid or folder is already deleted")
//     }
//     else{
//         console.log("Folder has been deleted..")
//     }
// })

// fs.writeFile() : It is used to write the file bascially

// fs.writeFile("New/text.txt","Hello World1 \n",(error)=>{
//     if(error){
//         console.log("The given path is invalid")
//     }
//     else{
//         console.log("File Creation done")
//     }
// })

// fs.appendFile() : It is used to create the file and also used to append the data on it
// fs.appendFile("New/appenf.txt","Hello append World 1 \n",(error)=>{
//     if(error)
//         console.log("Path is invalid")
//     else
//         fs.appendFile("New/appenf.txt","Hello append World 2 \n",(error)=>{})
//         fs.appendFile("New/appenf.txt","Hello append World 3 \n",(error)=>{})
//         fs.appendFile("New/appenf.txt","Hello append World 4 \n",(error)=>{})
//         fs.appendFile("New/appenf.txt","Hello append World 5 \n",(error)=>{})
//         console.log("The file is created")
// })

// fs.rename() it is used to rename the file

// fs.rename("New/appenf.txt","New/append.txt",(error)=>{
//     if(error){
//         console.log("The path is invalid")
//     }
//     else{
//         console.log("Name Change has been done")
//     }
// })

// fs.readFile() : It is used to read the file basically 
// fs.readFile("New/append.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("The file path is invalid")
//     }
//     else{
//         console.log(data)
//     }
// })


//Creating the os module basically there
// fs.mkdirSync("OS_Module")
// fs.writeFileSync("Os_Module/test2.js","Hello")
// fs.unlinkSync("Os_Module/test2.txt")