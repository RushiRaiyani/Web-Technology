const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url=='/home'){
       console.log('Home page');
       let a= fs.readFileSync('./home.html');
       res.end(a);
    } else if (req.url == '/Contacts'){
       console.log('Contact page');
       let a= fs.readFileSync('./contact.html');
        res.end(a);
    } else if (req.url == '/About') {
        console.log('About page');
        let a = fs.readFileSync('./about.html');
        res.end(a);
    }
    else{
        res.end("BYY")
    }
});

server.listen(3000, () => {
    console.log("started");
});