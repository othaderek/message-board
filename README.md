# Fullstack Message Board

|/* Directions for Message Board */|
------------------------------------

This is a way of breaking down every step of the proccess of making a message board style web app with node.js.

* Full Stack Message Board

* [ ] Create Server Folder
  * [ ] Init npm
  * [ ] Add express morgan cors body-parser
  * [ ] Create Hello World Route
* [ ] Create Client Folder
  * [ ] vue create client
  * [ ] Add bootstrap CSS
  * [ ] Homepage layout
* [ ] Add DB to server
  * [ ] Add monk joi
  * [ ] Create message model
  * [ ] Create route to add message to db
  	* [ ] validate message model
      * username - default to anonymous
      * subject
      * message
      * imageURL
      * created_at
    * [ ] inserted message into db
    * [ ] respond with inserted message
* [ ] When page loads show all messages on page
  * [ ] Server route to GET all messages
* [ ] Create new message form  on client
  * [ ] Submit form - fetch POST to server
  * Show any errors
  * Show new message on page
* [ ] User can reply to a message
  * [ ] Reply appears under original message
* [ ] Group messages into categories
* [ ] Deploy!
