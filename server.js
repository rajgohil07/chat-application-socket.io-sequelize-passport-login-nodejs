const app_getter = require("express");
const app = app_getter();
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const common = require('./src/common');
require("dotenv").config();

app.use(app_getter.static(path.join(__dirname, 'src/views')));
app.use(app_getter.json());
app.use(app_getter.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(session({
    secret: 'my_key',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const io = socketio(server);

//array defined
var users = [];

//initialize the socket connection
io.on('connection', (socket) => {

    //to get session id
    var users_id = socket.id;

    socket.on('message', async (msg, receiever_id, msg_type, receiever_db_id, sender_db_id) => {

        //fetch receiever name
        const receiever_name = await common.getNameFromId(sender_db_id);

        //console to check wheather messsage is receieved or not
        console.log("on message event name:" + receiever_name + " sended msg: " + msg);

        //for 2=private chat 1=brodcast chat
        if (msg_type === 2) {

            //store data into db
            await common.insertChat(sender_db_id, receiever_db_id, msg);
            const chat_db = await common.displayChatData(sender_db_id, receiever_db_id);
            socket.broadcast.to(receiever_id).emit('message', msg, chat_db, receiever_name.name, sender_db_id);
        }
        else {

            //if chat is broadcast
            let empty_chat_db;
            const remove_sender_id = users.filter(x => x.user_db_id !== sender_db_id);

            //store multiple user broadcast data into db
            remove_sender_id.forEach(async x => await common.insertChat(sender_db_id, x.user_db_id, msg));

            socket.broadcast.emit('message', msg, empty_chat_db, receiever_name.name, sender_db_id);
        }

    });

    //when new user joins the room
    socket.on('joinRoom', (name, user_db_id) => {

        //on join room
        console.log(name, "is connected!");
        const user = { users_id, name, user_db_id };

        //condition for push
        if (users.length) {
            const find_user = users.find(x => x.users_id === users_id);
            if (!find_user) users.push(user);
        } else users.push(user);

        io.emit('listuser', users);

    });

    //when user disconnects
    socket.on('disconnect', () => {
        users = users.filter(x => x.users_id !== socket.id);
        io.emit('listuser', users);
    });

});

//to create table sync
const db = require("./src/models");
db.sequelize.sync();

//call the router
require('./src/routers/route')(app);

//listening to port
server.listen(process.env.PORT || 8081, () => console.log("connected to the port : " + process.env.PORT || 8081));