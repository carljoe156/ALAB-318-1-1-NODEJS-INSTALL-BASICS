//npm init -y
//npm i nodemon

//npm init or //npm -y (to skip defaults)
//npm i -g nodemon

const http = require("http");
const PORT = 3000;
console.log("Hello");
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text / plain");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
