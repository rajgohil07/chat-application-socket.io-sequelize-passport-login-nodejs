const socket = io();

//ready method
$(function () {

    //to get userid and user name
    let logger_name = $("#logger_name").val();
    let user_db_id = $('#logger_id').val();

    //get sessionStorage
    const session_chat_db = JSON.parse(sessionStorage.getItem("chat_db"));
    const session_chat_name = sessionStorage.getItem("name") || logger_name;

    //display session ChatData if exist
    session_chat_db && session_chat_name ? domManipulation(session_chat_db, session_chat_name) : '';
    var session_socket_id = '';

    //on connect to get session id
    socket.on('connect', () => session_socket_id = socket.id);

    //on joinRoom
    socket.emit('joinRoom', logger_name, user_db_id);

    //to list the current active users
    socket.on('listuser', (data) => displayName(data, session_socket_id));

    //when send a message
    $("#send_msg_modal").on("click", () => {

        //value getters
        const modal_soketid = $("#modal_soketid").val();
        const modal_msg = $("#textarea").val();
        const receiever_id = $('#user_db_id').val();
        const receiever_name = modal_soketid ? $('#receiever_name_getter').val() : null;

        //to check wheter it is broadcast or private chat
        const msg_type = modal_soketid ? 2 : 1;

        //function call
        sendMsg(modal_msg, modal_soketid, msg_type, logger_name, receiever_id, receiever_name);

        //to empty the textArea
        $("#textarea").val('');
    });

    //when user send message 
    socket.on('message', (msg, chat_db, receiever_name, msg_from_db_id) => {
        const receiever_db_id = $('#logger_id').val();

        if (chat_db) {

            //set sessionStorage
            (receiever_name) ? sessionStorage.setItem("name", receiever_name) : null;
            sessionStorage.setItem("chat_db", JSON.stringify(chat_db));
        } else {

            //to changeSession
            changeSession(msg_from_db_id, receiever_db_id, msg, receiever_name);
        }

        //to decide wheter it is private message or broadcast 
        chat_db ? domManipulation(chat_db, receiever_name) : appendMsg(msg, receiever_name, 'incoming');
    });

    //to get socket id
    $(document).on("click", "#sendMsgModalInit", function () {
        $('#exampleModalLongTitle span').html($(this).data("name"));
        $('#modal_soketid').val($(this).data("id"));
        $('#user_db_id').val($(this).data('db_id'));
        $('#receiever_name_getter').val($(this).data("name"));
    });

    //logout button
    $(document).on("click", "#logout_button", () => {
        sessionStorage.clear();
        window.location.replace("/");
    });

    //for focus trigger
    $('#sendMsgModal').on('shown.bs.modal', () => $('#textarea').focus());

    // setTimeout for greting
    setTimeout(() => $(".greet_msg").slideUp(500, "swing"), 2100);

    //jquery animation
    $('#active_user_name_display').on("click", () => $('#friend_name_wrapper').toggle(500, "swing"));

});

//function calls
toGoDown = () => document.querySelector('.message_area').scrollTop = document.querySelector('.message_area').scrollHeight;

//to append the Msg
appendMsg = (sending_msg, logger_name, type) => {

    //inserting chat in form of HTML data
    const append_data = `<div class="${type} message"> <h4> ${logger_name} </h4> <p> ${sending_msg} </p></div> `;
    $('.message_area').append(append_data);
    toGoDown();
};

// to send the message
sendMsg = (msg, receiever_id, msg_type, logger_name, receiever_db_id, receiever_name) => {
    const sender_db_id = $('#logger_id').val();

    //to set session
    changeSession(sender_db_id, receiever_db_id, msg, receiever_name);

    //appendMsg function call
    appendMsg(msg, logger_name, 'outgoing');
    socket.emit('message', msg, receiever_id, msg_type, receiever_db_id, sender_db_id, receiever_name);
};

//change session
changeSession = (logger_id, receiever_db_id, msg, receiever_name) => {

    //declare object to be pushed to session
    let data_object_push = { id: null, sender_id: logger_id, receiever_id: receiever_db_id, message: msg };

    //check for sessionStorage
    if (sessionStorage.getItem("chat_db")) {

        //get session chat data and push it to sessionStorage
        var session_chat_db_getter = JSON.parse(sessionStorage.getItem("chat_db"));
        session_chat_db_getter.push(data_object_push);

        //setting sessionStorage
        sessionStorage.setItem("chat_db", JSON.stringify(session_chat_db_getter));
        receiever_name ? sessionStorage.setItem("name", receiever_name) : null;

    } else {

        //sending object as in form of array
        sessionStorage.setItem("chat_db", JSON.stringify([data_object_push]));
        receiever_name ? sessionStorage.setItem("name", receiever_name) : null;
    }
}

displayName = (data, session_socket_id) => {

    //remove current session_socket_id
    const data_filter = data.filter(x => x.users_id !== session_socket_id);

    //hide broadcast list for single user
    data_filter.length > 1
        ? $('#active_user_name_display_inside').show(500, "swing")
        : $('#active_user_name_display_inside').hide(500, "swing");

    let html_data = '';

    // looping the data
    data_filter.forEach(x =>
        html_data += `<li><a data-toggle="modal" id="sendMsgModalInit" data-target="#sendMsgModal" data-id="${x.users_id}" data-db_id="${x.user_db_id}" data-name="${x.name}"><h3>${x.name}</h3></a></li>`
    );
    var entire_html = `<ul>${html_data}</ul>`;
    $('#friend_name_wrapper').html(entire_html);

};

//dom manipulation
domManipulation = (arr, receiever_name) => {

    let msg_type_decide;
    let name_select_decide;
    let db_chat = '';
    let logger_name = $("#logger_name").val();
    let logger_id = $("#logger_id").val();

    arr.forEach(x => {

        msg_type_decide = (x.sender_id == logger_id) ? 'outgoing' : 'incoming';
        name_select_decide = (x.sender_id == logger_id) ? logger_name : receiever_name;

        //inserting chat in form of HTML data
        db_chat += `<div class="${msg_type_decide} message"> <h4> ${name_select_decide}</h4> <p> ${x.message} </p></div>`;
    });

    $('.message_area').html(db_chat);
    toGoDown();

};