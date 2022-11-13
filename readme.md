# Overview 
 This is a small API I started was actually a web service that anyone can access and create an account in it, and then, the client can rent an available car. 

Both clients and managers are included in this API as users.
After a period, I decided to switch to MongoDB for multiple reasons. The other API made with MongoDB database and have the full functionality of a renting service is available [here](https://www.amirghedira.com/project/Karyatn%20Backend/Nodejs%20-%20Express%20-%20MongoDB/60d7487ad7e12a0017340e70).

I wanted to share this version (MySQL), because it's helpful for beginners to understand how MySQL queries work with express and Nodejs. (this API doesn't include all functionality of renting cars, it was just a prototype. You can expend it how you want, and even change the context of it to another subject.) 

# Launch the project
To launch the project, you have to first add a `.env` folder in the root directory that will hold the environment variables of the backend. You can find a `.env.example` folder as reference for the environment variables used.

After adding a `.env` file, you have to install the NodeJS packages on the backend (the project holds both the frontend under the client folder and the backend in the root directory of the project)

To install the backend Node packages, simply run:
``` bash
npm install
```
To run the backend server, run:
``` bash
npm start
```
To run the backend server in development mode, run:
``` bash
npm run dev
```
Note that the server will listen on port `5000`



# Features / Technologies 
 Well, this small API doesn't include too much functionality, it actually demonstrates the basic way to communicate with MySQL database, retrieving the data, and editing it. 
The main feature this API have are user authentication and manipulating tokens. Also protecting some routes to be accessed from non-authenticated users. Also manipulating images and saving them in "uploads" folder. Also whenever a car or a user is deleted the images will be deleted too for a better storage management. I will mention the libraries I used below. 

# Platform & Libraries 
```json
 {
        "bcrypt": "^4.0.1",
        "body-parser": "^1.19.0",
        "express": "^4.17.1",
        "jsonwebtoken": "^8.5.1",
        "multer": "^1.4.2",
        "mysql": "^2.18.1",
        "nodemon": "^2.0.3"
}
```
I will begin with the basic packages:

## nodemon:
 This packages allow you to restart the server whenever you save your code, but also you can create with it environment variables, you can add a file called nodemon.json and you add your environment variables such as your database credential.

link: [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
## express: 
Which is the framework I used to develop this RestApi
link:[https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
## body-parser:
I added this package because I was working with a front end, this package allows you to parse incoming requests and parse the body. If you don't have a front end, and you will use postman, you can simply use this code in app.js file without the package itself.
``` javascript
app.use(express.json())
``` 
Link: [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser)

## jsonwebtoken:

This package is responsible for manipulating tokens and check for user authentication. Also, you can store data in the token as a payload, and then get it back from the request.

Link: [https://www.npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## multer:

This package is very useful to manipulate files such as saving them deleting them, you can also edit their names before saving them. it's really simple to use and to configure.

Link: [https://www.npmjs.com/package/multer](https://www.npmjs.com/package/multer)

## mysql:

This is the basic package to build a rest API with MySQL database. Actually, there is another package I will cover it next time which is sequelize, this package is more complicated and featured.
Both of these packages act like a driver between the database and your server.

Link: [https://www.npmjs.com/package/mysql](https://www.npmjs.com/package/mysql) 
# What I learned ?

 When I first used nodejs I built more API with Mysql, this is not my first API manipulating MySQL databases.
But you can learn more things from this project, actually its really simple and easy to learn from it.
Also you can expend it how you want. 
Finally, with your creativity, you can actually build your own rest API 
based on this model.