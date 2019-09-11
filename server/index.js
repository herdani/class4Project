// Purpose of file: To start our HTTP server
const app = require("./app"); // This loads in the code from app.js

const PORT = 8080;
app.listen(PORT, function() {
  console.log(`The server is is running on port ${PORT}`);
});
