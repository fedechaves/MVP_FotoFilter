# Privagram - Your Private Album

A simple Photo-Sharing App, built for group of friends or families to share the photos that aren't allow in social media, but at the same time are the funniest of the gathering/party.

![login](public/imgs/privagramHome.JPG)
![signup](public/imgs/signup%20privagram.JPG)
![dashboard page](public/images/team-task-gif.gif)

> Be sure to add that lovely star 😀 and fork it for your own copy

---

# How it's made

**Tech used:** EJS, CSS, JavaScript, Node, Express, MongoDB and passport.js, cloudinary, multer.

**Notable Dependencies:**

* connect-mongo (https://www.npmjs.com/package/connect-mongo)
   - Used to save cookie in database that allowed for user's session to persist.
* dotenv (https://www.npmjs.com/package/dotenv)
   - Intergration of .env file that allows protection and processing of environment variables.
* express-session (https://www.npmjs.com/package/express-session)
   - Middleware that aids formating of user session cookie data. Used in cooperation with 'connect-mongo' to store the session in the database.
* mongoose (https://mongoosejs.com/)
   - Schema-based solution to model application data. Used to validate/organize database user and story entries.
* morgan (https://www.npmjs.com/package/morgan)
   - Node. js and Express middleware to log HTTP requests and errors. Used to simply process of testing/troubleshooting during development.
* passport (https://www.passportjs.org/)
   - Authentication middleware for Node.js. Used to modularize the authentication process with OAuth and Google login.
* passport-local (https://www.passportjs.org/packages/passport-local/)
   - The local authentication strategy authenticates users using a username and password.
* ejs- local (https://ejs.co/)
   - embeded javascript templating language for the frontend.
* bcrypt (https://www.npmjs.com/package/bcrypt)
   - A library to help you hash passwords.
* cloudinary (https://cloudinary.com/documentation/node_integration)
  - A free DB to store and deliver media assets.
* Multer (https://www.npmjs.com/package/multer)
  - Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

---

# Lessons Learned:

Added Tailwind for the first time, trying to make stylish webapp in a short period of time, specially in design. 

In the future I would like to implement friends, tags, blurred face if the person that is in the photo don't like it, and add a choice for Google Authentication for login.  

---

# How to Get it Working:

Add a .env file in the config folder with these two values:
* PORT = 2121 //or whatever you choose
* DB_STRING =  //MongoDB connection string
* CLOUD_NAME = //Cloudinary Cloud Name
* API_KEY =    //Cloudinary API Key
* API_SECRET = //Cloudinary API Secret
---
