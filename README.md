# Mentor Match

<p align="center">
  <img src="http://via.placeholder.com/300" alt="Bundle Analyzer example"
       width="650" height="335">
</p>


<p align="center">
	<a href="#ios">
        	<img src="https://dl.dropboxusercontent.com/s/ck42lqeda643v02/sdversion-ios.png?dl=0" alt="iOS">
	</a>
	<a href="#mac-os">
		<img src="https://dl.dropboxusercontent.com/s/2yhgx57v4alnzld/sdversion-mac.png?dl=0" alt="Mac">
	</a>
</p>

## Table of Contents

* [About](#About)
* [How It Works](#how-it-works)
* [Technologies](#Technologies)
* [Instructions](#Instructions)
  * [react native](#react-native)
  * [server](#express-node-server)
  * [expo](#expo)
  * [mysql](#mysql)

## About

  Mentor Match is a full-stack mobile application that aims to connect people in tech with similar skills, but different levels of experience.

## How It Works

  User's sign up and create a profile with current skills and work experience, and based their profile, Mentor Match will return other users that fit the Mentor / Mentee match and open a chat for users to interact.

## Technologies

  * JavaScript    
  * Node.js    
  * React-Native   
  * Native-Base       
  * Sequelize    
  * Express    
  * Expo   
  * MySql

## Instructions
  In order to run Mentor Match locally you will need the following installed:

  [Node](https://nodejs.org/en/)
  [MySql (windows)](https://dev.mysql.com/downloads/workbench/)
  [MySql (Mac)](https://www.sequelpro.com/)
  [Expo (https://expo.io/)][#expo]
  
  After you have installed those: 

  `git clone https://github.com/elliechen321/Mentor_Matching_App.git` 

  This application runs on two seperate ports, so it is important to install dependencies in both the front end and back end. 

#### `react-native`

  From bash / terminal run the following:

  `cd Mentor_Matching_App`  or cd into whatever directory you cloned the git repo into.

  `npm install` 


#### Expo `expo`

Expo is a toolchain built for react-native development. In order to run Mentor Match, your phone and computer will need to be on the same network.
Checkout the [docs] if you encounter any problems. (https://expo.io/learn)

`npm install exp --global`


#### Express-Node-Server `express-node-server`

`cd MentorBackend`

open `config/config.json`

Enter your mysql password into the development object.

```
 {
  "development": {
    "username": "root",
    "password": "<YOUR PASSWORD HERE>", 
    "database": "mentor_crud_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
``` 
Run the following commands to get install dependencies for the back end.

`npm install`

Initialize a local database / run migration and seed files.

`sequelize db:create mentor_crud_db`

`sequelize db:migrate`

`sequelize db:seed:all`

Start the express server.

`node server.js`

