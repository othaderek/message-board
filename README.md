# Fullstack Message Board

|/* Directions for Message Board */|
------------------------------------

This is a way of breaking down every step of the proccess of making a message board style web app with node.js.

* Full Stack Message Board

* [x] Create Server Folder
  * [x] Init npm
  * [x] Add express morgan cors body-parser
  * [x] Create Hello World Route
* [x] Create Client Folder
  * [x] vue create client
  * [x] Add bootstrap CSS
  * [x] Homepage layout
* [x] Add DB to server
  * [x] Add monk joi
  * [x] Create message model
  * [x] Create route to add message to db
  	* [x] validate message model
      * username - default to anonymous
      * subject
      * message
      * imageURL
      * created_at
    * [x] inserted message into db
    * [x] respond with inserted message
* [x] When page loads show all messages on page
  * [x] Server route to GET all messages
* [x] Create new message form  on client
  * [x] Submit form - fetch POST to server
  * Show any errors
  * Show new message on page
* [ ] User can reply to a message
  * [ ] Reply appears under original message
* [ ] Group messages into categories
* [ ] Deploy!
