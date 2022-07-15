<p style="text-align: center;"><img src="./github-repository-img/yeolmu.png"></img></p>

Yeolmu Market
======

This is the **frontend** application for the Yeolmu Market</a> project, which intends to be a clone of Dangeun Market (당근마켓, https://www.daangn.com/). It is basically a second hand online market where users can upload items to sell or give and they can be contacted by other users willing to buy.

## Technologies Used:

* React.js
* Firebase for user avatar & item image hosting
* Redux Toolkit for user info state management
* Docker

## Current functionalities:

In the current status, the application is able to do the following things:

* Upon accessing the site, it sends a request to the API to display all the available items along with the name and price.
* The registration page allows the user to register an account which is saved in a MongoDB instance. The image uploaded for the avatar is saved on Firebase.
* The login page allows the user to authenticate with the API, which will return userdata to be stored by redux toolkit. A cookie is also placed in the browser. Signing out will remove the cookie.
* The autologin allows to automatically send a login request to the API after a page refresh if the user has been previously logged in.
* When the user is logged in, a "My Items" button will appear where the user can check the items they uploaded.
* Users can upload items which will be stored in the MongoDB instance and the item picture in Firebase.


## To-Do:
- [ ] English translation
- [ ] Prettify the interface
- [ ] Improve the item card to include the uploader name, upload date.
- [ ] Make functional the "Like" button by creating a wishlist.
- [ ] Refactor Firebase out of the frontend and use S3 instead in the API.
- [ ] Allow users to remove their uploaded items.
 


## Installation and Running:

**IMPORTANT**: This application requires the backend to be run alongside it locally. The API can be found <a src="">here</a>.

First, build the docker image from the ```Dockerfile```
```code
docker build -t yeolmu-frontend:latest .
```
Then create the container:

```code
docker run -p 3001:3000 yeolmu-frontend
```
Please note that because currently both this and the API point to port 3000, it is necessary to redirect the port from any available port to the port 3000 within the container.

Finally, access the app at ```http://localhost:3001```
