<!-- # My First Web Server

A starter repo for the ACA 311 `Express` project.

## Setup

Initialize and run the app: `npm install && npm start`.

## Testing the routes

Use Postman to test the routes created in the following sections. Your base url will be `localhost:4000` (whatever your port number is) and the paths will be the routes defined below. For example, if I wanted to test the users route I would plug in the following information to Postman:

* Protocol: GET
* Request url: http://localhost:4000/users

## Part 1: Basic routes

* Create the following routes:

  * GET /users
    * Give your server the ability to respond to a GET request with a path "/users" and return the users array from state.js
    * Ex. `res.json(users)`

  * GET /users/1
    * Give your server the ability to respond to a GET request with a path "/users/1" and return the first user object from the users array from state.js

  * POST /users
    * Give your server the ability to respond to a POST request with a path "/users" and add a hard coded user object to the users array from state.js. Use `res.json()` to send the last user in the array (should be the new one) back to the client.
    * If you do another GET request you should see this added
    * You will need to create the hard coded user mentioned above

  * PUT /users/1
    * Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value (ex. name, occupation) on the first user object in the users array in state.js. Use `res.json()` to send this user back to the client.

  * DELETE /users/1
    * Give your server the ability to respond to a DELETE request with a path "/users/1" and remove the first item from the users array. Use `res.send()` to send back a messsage, "deleted" -->

<!-- ## Part 2. Body-parser module

<!-- * Require the `body-parser` module on the line below `require('express')`. (it has already been npm installed) -->

<!-- * Give your server the ability to handle a POST request with a path "/users" and add the data from the client to the users array

  * This means you will be adding `req.body`. Console log this to see what you get and don't forget to send an actual body with the request in Postman

  * Assign an _id property to the user object that is a number that increments by 1 each time.
    * To do this, set a variable called counter near the `{ users }` variable. Start it at the length of the users array

  * Use `res.json()` to send the user object back to the client. (if you do another GET request you should see this added) --> -->

## Part 3. Use path variables

* Alter the following routes:

  * GET /users/1 => GET /users/:userId
    * Give your server the ability to respond to a GET request with a path `/users/:userId` and return the user object from the users array that has the _id == userId

  * PUT /users/1 => PUT /users/:userId
    * Give your server the ability to respond to a PUT request with a path `/users/:userId` and just change any key value on the user object with this _id 

  * DELETE /users/1 => DELETE /users/:userId
    * Give your server the ability to respond to a DELETE request with a path `/users/:userId` and find the user with this id from the array. Give this user object a new key value `isActive: false`. Use `res.send()` to send back a messsage, "deleted"

