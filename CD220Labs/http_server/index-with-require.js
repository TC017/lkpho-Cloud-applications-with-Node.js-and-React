 // Import the HTTP module
 const http = require('http');

 // Import the 'today' module
 const today = require('./today');
 
 // Define the request listener function
 const requestListener = function (req, res) {
     res.writeHead(200); // Set the status code to 200 (OK)
     let dateVal = new Date(today.getDate()); // Get the current date from the 'today' module
 
     const hour = dateVal.getHours();
     let greeting;
 
     if (hour >= 6 && hour < 12) {
         greeting = "Good morning!";
     } else if (hour >= 12 && hour < 18) {
         greeting = "Good afternoon!";
     } else if (hour >= 18 && hour < 21) {
         greeting = "Good evening!";
     } else {
         greeting = "Good night!";
     }
 
     // Send the response with the appropriate greeting
     res.end(`Hello, ${greeting}`);
 };
 
 // Define the port number
 const port = 8080;
 
 // Create an HTTP server using the request listener function
 const server = http.createServer(requestListener);
 
 // Start the server and listen on the specified port
 server.listen(port);
 console.log('Server listening on port: ' + port);