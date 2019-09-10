// Filename: index.js
const express = require("express"); // This loads the Express functionality in

const app = express(); // This instantiates Express so we can use it

app.use(function requestHandler(request, response) {
  response.send("Hi everybody! Now it is an Express server");
});

const PORT = 8080;

app.listen(PORT, () =>
  console.log(
    "This message makes visible to the developer that the server is running, usually you want to include the port number here as well (for debugging purposes)"
  )
); // The listen() function starts the Express server, by making it actively listen (to port 8080)