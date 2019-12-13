const http = require("http");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (request, response) => {
  console.log(Date.now() + " GET Root");
    response.sendFile(__dirname + "/views/index.html");
});

// If you are hosting Unicord under a Glitch instance, un-comment this bottom section.
 /* 
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 28000);

*/
