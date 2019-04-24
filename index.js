// Requrie in the list of node modules required to make the API function
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');

/**
 * Set up the ENV config. Using an ENV file is common practise
 * and is used to specify important runtime settings and configs
 * that would required during the applicqtion. Please see the included 
 * `.env` file as an example
 */
dotenv.config();

/** 
 * Let's create an Express instance in order to allow our API
 * to handle web requests and serve up data
 */
const app = express();

/**
 * Once the Express instance has been initialized, it has to be configured
 * to make it a little more accessible to the outside world, like a
 * traditional API. The CORS (Cross Origin Resource Sharing) needs to be
 * configured, to make sure your requests and XHR request are allowed 
 * to be sent to the API
 */
app.use(cors());
app.options('*', cors());

/** 
 * This bit is optional, however if you did want to serve up static content
 * or public files from the API then you could use the code below to allow
 * requests through and serve up the files. These files should be located 
 * inside a `public` folder and these will be served up without having
 * to create an endpoint for these files. To active this code, uncomment 
 * the below code.
 */
// app.use(express.static('public'));

/**
 * Another consideration to make would be to see if someone tries
 * to hit your api directly. this would be done via hitting 
 * `yourdomain.com/`. However you may not want the user to see anything
 * or view a 404 page. This could be done by setting up a redirect 
 * to navigate the user away to another site or page. This can be turned
 * on via uncommentting the below code.
 */
// app.get('/', function (request, response) {
//   response.redirect('https://www.google.co.uk');
// })

/**
 * One other consideration would be to include some 
 * kind of authentication check to check that the 
 * request that the API is receiving is authorised
 * to send requests to the API and reject the request
 * if it isn't coming from an authenticated origin
 */

 /**
  * Next, is to configure the port in which the API will 
  * listen for requests on. This is how the API will receive
  * the web requests made to it. 
  * *NOTE START* 
  * Something to note will be that this will be `localhost:port`. This would
  * not be ideal for a production server. However NGINX could be
  * configured for a proxy pass to proxy the request off to localhost
  * *NOTE END*
  */
 const port = process.env.PORT;

 /**
  * One of the final steps is require the routes for the API. These
  * are commonly known as endpoints and these are the routes that 
  * can be accessed to send or receive data from the API. It is good
  * practise to keep these in a separte folder and files to keep the 
  * source code neat and readable. We also need to pass the express
  * instance to the routes file so that we can use express to handle
  * the web requests.
  */
require('./Routes')(app);

/**
 * The final step for the server file, is make express listen for
 * requests. This allows Node and Express to pickup on the web requests
 * made to it (localhost:port). We add a callback as the section arguement
 * into the listen function to produce some output for development 
 * purposes, so we know the express app is running.
 */
app.listen(port, ()=> {
  console.log('[app.listen]', `Listening for requests on port ${port} - ${new Date()}`);
})