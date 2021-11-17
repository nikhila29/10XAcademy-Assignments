// Assignment 2
// Create a file called index.html using NodeJs fs module with the content added below
// <h1>Hello World</h1>
// <p>This is {Your Name}...</p>
// Create a simple http server using NodeJs and serve this file

const fs=require("fs");
const http=require("http");

const content=`<h1>Hello World</h1>
<p> This is {Your Name}...</p>`;

fs.writeFile("index.html",content,(err)=> {
    if (err) {
        console.log(err);
    }
    console.log("File Written");

    const server=http.createServer((req,res) => {
        fs.readFile("index.html", (err,data) => {
            if (err) {
                res.end("File Not Found");
            } else {
                res.end(data.toString());
            }
        })
    });

    server.listen(5000)
})