# chat-application-with-socket.io-sequelize-passport-login-nodejs<br>

Tech=><b>Node.js</b><br>
Database=><b>MySql</b><br>
ORM =><b>Sequelize</b><br>
Database_backup_file_name=><b>db_backup_chat_app.sql</b><br>
Front_end=><b>src/view</b><br>

# Additional infomation

<b>Creation of chat application applying socket.io including private chat and broadcast which is administered by passport login moreover Sequelize ORM along with migration integration beside MySql database with proper MVC structure in nodejs.<b><br><br>

More info:<b>https://socket.io/get-started/private-messaging-part-1/</b><br>

# key features

- login system with passport to store user info in session
- user can share both private and broadcast message
- store every message in db with the help of sequilize
- retrive chat data from db and display it
- chat stays as it even on page refresh because of sessionStorage
- list of available users and also remove the user from list if user disconnects
- proper comments for understandings

# Reuired modules

<b>bcrypt</b> @5.0.1<br>
<b>connect-flash</b> @0.1.1<br>
<b>dotenv</b> @10.0.0<br>
<b>ejs</b> @3.1.6<br>
<b>express</b> @4.17.1<br>
<b>express-session</b> @1.17.2<br>
<b>mysql2</b> @2.2.5<br>
<b>passport</b> @0.4.1<br>
<b>passport-local</b> @1.0.0<br>
<b>sequelize</b> @6.6.2<br>
<b>socket.io</b> @4.1.2<br>

# Installing the Sequelize CLI

To install the Sequelize CLI:<br>
<b>npm install sequelize-cli</b>

# How to init Migration

To create an empty project you will need to execute init command<br>
<b>npx sequelize-cli init</b>

# Creating the first Migration Model

To create a model named User<br>
<b>npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string</b>

# To Run Migrations

type the following command to run to migration <br>
<b>npx sequelize-cli db:migrate</b>

# To Undo Migrations

You can revert to old state by just running a command.<br>
<b>npx sequelize-cli db:migrate:undo:all </b>

# Creating the first Seed

create a seed file which will add a demo user to our User table.<br>
<b>npx sequelize-cli seed:generate --name demo-user</b>

# To Run the Seeds

To insert demo user inserted into User table type the following command.<br>
<b>npx sequelize-cli db:seed:all</b>

# To Undo Seeds

All the Seeders can be undone if they are using any storage.<br>
<b>npx sequelize-cli db:seed:undo:all</b>

# How to Start

Open the directory and install all the required modules by typing the following command<br>
<b>npm i</b><br><br>

to create migration with database also insert data as seeds type following command<br>
<b>npm run migrate</b><br><br>

After module installation just simply typewrite the following code to start the node server<br>
<b>npm start</b><br><br>

to empty the all table data type the following command<br>
<b>npm run clear_data</b><br><br>

to remove all tables type the following command<br>
<b>npm run clear_table</b><br><br>

# How to run in browser

Paste this in browser:-<b>http://127.0.0.1:8081/</b>
