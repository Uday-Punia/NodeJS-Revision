// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("<h1>Haksh Hai ParamAtma</h1>");
//   res.write("<h2>Haksh Hai ParamAtma</h2>");
//   res.write("<h3>Haksh Hai ParamAtma</h3>");
//   res.end("<h4>Haksh Hai ParamAtma</h4>");
// });
// server.listen(8000, () =>
//   console.log("Server is running at http://localhost:8000")
// );

//Below is the practice of the particular data

// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.write("<h1>HARE KRISHNA HARE KRISHNA HARE HARE HARE RAMA HARE RAMA RAMA RAMA HARE HARE</h1>")
//     res.end("<h1>HARE KRISHNA HARE KRISHNA HARE HARE HARE RAMA HARE RAMA RAMA RAMA HARE HARE</h1>")
// })
// server.listen(8000,()=>console.log("Server is running in http://localhost:8000"))

//Routing example

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("<h1>This is Home Page</h1>")
//     }
//     else if(req.url==="/aboutus"){
//         res.end("<h1>This is About Us Page</h1>")
//     }
//     else if(req.url==="/contactus"){
//         res.end("<h1>This is Contact Us Page</h1>")
//     }
//     else if(req.url==="/profile"){
//         res.end("<h1>This is Your Profile Page</h1>")
//     }
//     else{
//         res.writeHead(404)
//         res.end("<h1>ERROR 404 !! PAGE NOT FOUND</h1>")
//     }
// })
// server.listen(8000,()=>console.log("The Server is running in http://localhost:8000"))

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("<h1>This is Home Page</h1>")
//     }
//     else if(req.url==="/data"){
//         let data=[
//             {id:1001,name:"Uday Punia",dsg:"Frontend web developer",salary:50000,city:"haridwar",state:"Uttarakhand"},
//             {id:1001,name:"Uday Punia",dsg:"Frontend web developer",salary:50000,city:"haridwar",state:"Uttarakhand"},
//             {id:1001,name:"Uday Punia",dsg:"Frontend web developer",salary:50000,city:"haridwar",state:"Uttarakhand"},
//             {id:1001,name:"Uday Punia",dsg:"Frontend web developer",salary:50000,city:"haridwar",state:"Uttarakhand"}
//         ]
//         res.end(JSON.stringify(data))
//     }

//     else{
//         res.writeHead(404)
//         res.end("<h1>ERROR 404 !! PAGE NOT FOUND</h1>")
//     }
// })
// server.listen(8000,()=>console.log("The Server is running in http://localhost:8000"))

//How to read the file there
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("<h1>This is Home Page</h1>");
//   } else if (req.url === "/data") {
//     let data = fs.readFileSync("data.json", "utf-8")
//     res.end(data);
//   } else {
//     res.writeHead(404);
//     res.end("<h1>ERROR 404 !! PAGE NOT FOUND</h1>");
//   }
// });
// server.listen(8000, () =>
//   console.log("The Server is running in http://localhost:8000")
// );
