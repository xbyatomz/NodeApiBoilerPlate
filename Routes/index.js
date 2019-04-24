module.exports = function (app) {
  /**
   * Inside this file goes the routes that will be accessible from
   * the outside world. We'll create a test route and return the request
   * data to make sure that we have configured our API correctly. 
   * We have to declare type of request that will hit the endpoint
   * (GET, POST, PUT, UPDATE, etc). We also have to state the endpoint
   * path, `/test` in this case. We also have to provide a callback, this
   * is where logic goes to handle the request. Whether any data processing 
   * needs to take place or any queries to be executed and data needs to be
   * returned. We return data using the `Response` object we parse to the callback.
   * We have to set the request status code and the data that is sent back
   * in the request
   */
  app.get('/test', (Request, Response) => {
    return Response.status(200).send('Successful Request To Your API');
  });
}