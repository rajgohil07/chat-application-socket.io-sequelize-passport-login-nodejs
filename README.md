# chat-application-with-socket.io-sequelize-passport-login-nodejs<br>

Tech=><b>Node.js</b><br>
Database=><b>MySql</b><br>
ORM =><b>Sequelize</b><br>
Database_backup_file_name=><b>db_backup_chat_app.sql</b><br>
Front_end=><b>src/view</b><br>

# Additional infomation

<b>Creation of chat application applying socket.io including private chat and broadcast which is administered by passport login moreover Sequelize ORM beside MySql database with proper MVC structure in nodejs.<b><br><br>

<b>More info:</b>https://socket.io/get-started/private-messaging-part-1/<br>

# key features

- login system with passport to store user info in session
- user can share both private and broadcast message
- store every message in db with the help of sequilize
- retrive chat data from db and display it
- chat stays as it even on page refresh because of sessionStorage
- list of available users and also remove the user from list if user disconnects
- proper comments for understandings

# Reuired modules

<b>bcrypt</b>@5.0.1<br>
<b>connect-flash</b>@0.1.1<br>
<b>dotenv</b>@10.0.0<br>
<b>ejs</b>@3.1.6<br>
<b>express</b>@4.17.1<br>
<b>express-session</b>@1.17.2<br>
<b>mysql2</b>@2.2.5<br>
<b>passport</b>@0.4.1<br>
<b>passport-local</b>@1.0.0<br>
<b>sequelize</b>@6.6.2<br>
<b>socket.io</b>@4.1.2<br>

# How to Start

Open the directory and install all the required modules by typing the following command<br>
<b>npm i</b><br><br>
After module installation just simply typewrite the following code to start the node server<br>
<b>npm start</b><br><br>

# How to run in browser

Paste this in browser:-<b>http://127.0.0.1:8081/</b>
