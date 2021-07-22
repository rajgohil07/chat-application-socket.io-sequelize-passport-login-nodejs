'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {


        await queryInterface.bulkInsert('user_data', [
            {
                "id": "1",
                "name": "Raj Gohil",
                "email": "raj.gohil@gmail.com",
                "password": "$2b$10$BZJaGfYG2tkRGgmBDzWxV.nYV7zAP21Tc5syU1qMImjIKgx3INklK"
            },
            {
                "id": "3",
                "name": "Raj Gohil",
                "email": "raj.famous007@gmail.co",
                "password": "$2b$10$BZJaGfYG2tkRGgmBDzWxV.nYV7zAP21Tc5syU1qMImjIKgx3INklK"
            },
            {
                "id": "4",
                "name": "Raj Gohil admin",
                "email": "rafamous007@gmail.com",
                "password": "$2b$10$Yla9ReyB5Sn6f4aHLksSnuV7t4XaEu5sc6d7HyZUpc9Hk0pHOytNS"
            },
            {
                "id": "5",
                "name": "new admin 1st",
                "email": "raj.e@gmail.com",
                "password": "$2b$10$o9FKUEphb/JRyRAXDIZANuSIswuhOINfQzaIpioL7zg2omhFEnxGC"
            },
            {
                "id": "6",
                "name": "new admin 2nd",
                "email": "j.famous007@gmail.com",
                "password": "$2b$10$WUOUNtQFOTYC1ZP73BuOu.nGAFe7ujGz/fTJzbS5oy.XasYOSb1SS"
            },
            {
                "id": "7",
                "name": "form tatvasoft",
                "email": "customer1@mail.com",
                "password": "$2b$10$dEJ8dGuSNTdDzG9rA.5ls.mkgy7fe/xPbq1iccCpWU/6IAIIYQMWS"
            },
            {
                "id": "8",
                "name": "customer 2",
                "email": "customer2@mail.com",
                "password": "$2b$10$Hz1qridd8XjUHo6PrlbjhORuBE4yh4H8bq4ej28csXZzhUsS04pDa"
            },
            {
                "id": "9",
                "name": "customer 3",
                "email": "customer3@mail.com",
                "password": "$2b$10$v16AeEypyPjJGUDwCmP5P.TztAgogOPjx1/vMcd.4VG3cnBQ/bU9C"
            },
            {
                "id": "10",
                "name": "customer 4 try",
                "email": "customer3@mail.inn",
                "password": "$2b$10$mW/BRJtbEcs6CXObyEXXVeQbyl3lz/aNqsNeKWhPCPeXkyTTVFpFW"
            },
            {
                "id": "11",
                "name": "admin try try",
                "email": "admin try try",
                "password": "$2b$10$EcRWBnApp3wJ1PEieEnex.TQdHxLUCZA60KXO3H1rAhx8biL6qUvS"
            },
            {
                "id": "12",
                "name": "customer try try",
                "email": "customer try try",
                "password": "$2b$10$UAaivqB.58zNzL7a.vVJXOdy4xnovVKOlnBZ7PaOfPKCXkLC1R5dC"
            },
            {
                "id": "13",
                "name": "admina admin",
                "email": "admin@123",
                "password": "$2b$10$drBbTncVmggiiwiI8V9cMeqSkxjcjTZrtYexAincScaKNhJ0DfWVe"
            },
            {
                "id": "14",
                "name": "cus customer",
                "email": "cus@123",
                "password": "$2b$10$5dJbcCztY8pku10/DzcT6OFtjDdAbz0U1KfdHzo5Vhxzghcjf8I3q"
            },
            {
                "id": "15",
                "name": "admin may be last",
                "email": "lastadmin@gmail",
                "password": "$2b$10$UjeK/3jIN2TritxV39CdDu.LqvIXykLLv03q0Hq7vaRz6QRMIjD3e"
            },
            {
                "id": "16",
                "name": "may be last customer",
                "email": "lastcusto@123",
                "password": "$2b$10$Rn.aDWxAegu3pgnyZ9A6FuNetRvTEZoHK8TAlFjrSK2FpXqssfulm"
            },
            {
                "id": "17",
                "name": "demo try",
                "email": "super@gmail",
                "password": "$2b$10$dSPybLjpYsEIxiSrSgzeVeaIdlLUQgWxqclBQjUEvtsebbeQ32B6q"
            },
            {
                "id": "18",
                "name": "going to add customer form admin",
                "email": "aaa@gmail.com",
                "password": "$2b$10$OXI3MLunbzKA.HEhcOzur.k21p5z5BfT4dH3gAT6sxyTY4.Lz5O4S"
            },
            {
                "id": "19",
                "name": "admin entry from  super admin",
                "email": "adada@123",
                "password": "$2b$10$rFsznj7puzdCuAf/eBkAuOU/UdG20meU/.wzKY3VJ2JPiY/2e75SW"
            },
            {
                "id": "20",
                "name": "123",
                "email": "123@gmail.com",
                "password": "$2b$10$hJHcN0gI/y74UYgv3uTPweP2q6L3K2eopFoNC5RP4XddIWbdqGyim"
            },
            {
                "id": "21",
                "name": "123456",
                "email": "123@gmail.in",
                "password": "$2b$10$VYGzo4gEF4Hd.szczKtFa.WdH1xTHtTOoqLoUrx91OXJf6ull7uda"
            },
            {
                "id": "22",
                "name": "working",
                "email": "wprk@gmail.com",
                "password": "$2b$10$fW0FJoBULVvkNbvEUQurleiFsETc/bdxSu2tjwaEDGGVbc43TKSj."
            },
            {
                "id": "23",
                "name": "123123213",
                "email": "1231232@gmail.com",
                "password": "$2b$10$sTs.qtB4QgMpoVM.8uoMmuPzQNI0fFjCEQsqF4TOek4A5zPa7Pliq"
            },
            {
                "id": "24",
                "name": "Raj Gohil",
                "email": "raj.fffamous007@gmail.com",
                "password": "$2b$10$gHAKIzGSyoUpOQ2FRA2N/e7ZhOSR2l2fcMAY3butWRvvQ3yZaWccO"
            },
            {
                "id": "25",
                "name": "Raj Gohil",
                "email": "rj.famous007@gmail.com",
                "password": "$2b$10$r/5xrF/0AoPOdB4i2FPu8OtAxNeCniUmt.K971ex8eBrxavzhKleS"
            },
            {
                "id": "26",
                "name": "admin from cus3 ",
                "email": "cusc@gmail.com",
                "password": "$2b$10$vqlxb815p3x51uQ9xHNKTuSIdUmG1WJ2RH6I2rSHW15Iirw5Y1e2y"
            },
            {
                "id": "27",
                "name": "bhai bhai bhai",
                "email": "bhai@123gmail.com",
                "password": "$2b$10$T5ZbXfLN4RJ2gkIKROhE7.4KWBBcAqHcq7NO.xeux8Z21V0dsSJPG"
            },
            {
                "id": "28",
                "name": "admin here final try",
                "email": "adminhere@gmail.com",
                "password": "$2b$10$6GHczTYYm4OjWfE0va7OvelEP2mhHATd82A8J/AEsUN385Jj2VItS"
            },
            {
                "id": "29",
                "name": "Raj Gohil",
                "email": "raj.famous007@gmail.com",
                "password": "$2b$10$/zi/ZNPr3Rm8esNHXEovd.DrGXMIVzfpTXg52xNS7legMLjaAqjQq"
            },
            {
                "id": "30",
                "name": "betav1",
                "email": "beta@gmail.com",
                "password": "$2b$10$iJ2ScECwlT0sQaYYwNjwKuyd07E0KHGT05z6.C3LAHHNGMReoMAqC"
            },
            {
                "id": "31",
                "name": "customoer form admin",
                "email": "admincustomer@gmai.ci",
                "password": "$2b$10$mRM7sHcBMIYKqCU8Y4UzlOCIfChWlErgwfSLspsfhUPtmLwhZmjSS"
            }
        ]);
        await queryInterface.bulkInsert('user_chat_data', [
            {
                "id": "1",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi admin"
            },
            {
                "id": "2",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi demo try"
            },
            {
                "id": "3",
                "sender_id": "5",
                "receiever_id": "29",
                "message": "admin check to all"
            },
            {
                "id": "4",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "admin check to all"
            },
            {
                "id": "5",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "admin check to all"
            },
            {
                "id": "6",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hiii im demo need yr time"
            },
            {
                "id": "7",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "yaa admin tell me im free"
            },
            {
                "id": "8",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hii im demo"
            },
            {
                "id": "9",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi demo Im busy right now"
            },
            {
                "id": "10",
                "sender_id": "17",
                "receiever_id": "29",
                "message": "hi"
            },
            {
                "id": "11",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi new admin congo"
            },
            {
                "id": "12",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "thanks demo"
            },
            {
                "id": "13",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "admin localstorage"
            },
            {
                "id": "14",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "ya let me check"
            },
            {
                "id": "15",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "by refreshing the page"
            },
            {
                "id": "16",
                "sender_id": "29",
                "receiever_id": "9",
                "message": "what is this?"
            },
            {
                "id": "17",
                "sender_id": "17",
                "receiever_id": "17",
                "message": "demo try"
            },
            {
                "id": "18",
                "sender_id": "29",
                "receiever_id": "5",
                "message": "hi new admin"
            },
            {
                "id": "19",
                "sender_id": "5",
                "receiever_id": "29",
                "message": "hi raj"
            },
            {
                "id": "20",
                "sender_id": "5",
                "receiever_id": "29",
                "message": "raj"
            },
            {
                "id": "21",
                "sender_id": "5",
                "receiever_id": "29",
                "message": "hi"
            },
            {
                "id": "22",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi session check mister"
            },
            {
                "id": "23",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "checking me too brother"
            },
            {
                "id": "24",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "oh okay lol\n"
            },
            {
                "id": "25",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "26",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi"
            },
            {
                "id": "27",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "all working fine?"
            },
            {
                "id": "28",
                "sender_id": "17",
                "receiever_id": "9",
                "message": "all working fine?"
            },
            {
                "id": "29",
                "sender_id": "17",
                "receiever_id": "29",
                "message": "all working fine?"
            },
            {
                "id": "30",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi demo im admin"
            },
            {
                "id": "31",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hiii admin im demo"
            },
            {
                "id": "32",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "123"
            },
            {
                "id": "33",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "abc"
            },
            {
                "id": "34",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hiii admin"
            },
            {
                "id": "35",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hiiii demooooooo"
            },
            {
                "id": "36",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi admin hello"
            },
            {
                "id": "37",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hello demo iim fine tell me"
            },
            {
                "id": "38",
                "sender_id": "9",
                "receiever_id": "29",
                "message": "hi raj its cus3"
            },
            {
                "id": "39",
                "sender_id": "29",
                "receiever_id": "9",
                "message": "hi cus3 im raj "
            },
            {
                "id": "40",
                "sender_id": "29",
                "receiever_id": "9",
                "message": "what do you want?"
            },
            {
                "id": "41",
                "sender_id": "29",
                "receiever_id": "9",
                "message": "thanks"
            },
            {
                "id": "42",
                "sender_id": "9",
                "receiever_id": "29",
                "message": "i was just wishing you"
            },
            {
                "id": "43",
                "sender_id": "29",
                "receiever_id": "9",
                "message": "okay fine have a good day"
            },
            {
                "id": "44",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "45",
                "sender_id": "17",
                "receiever_id": "9",
                "message": "hi"
            },
            {
                "id": "46",
                "sender_id": "9",
                "receiever_id": "17",
                "message": "all fine thanks"
            },
            {
                "id": "47",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi"
            },
            {
                "id": "48",
                "sender_id": "9",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "49",
                "sender_id": "17",
                "receiever_id": "9",
                "message": "its cus3 hi"
            },
            {
                "id": "50",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "51",
                "sender_id": "17",
                "receiever_id": "9",
                "message": "123"
            },
            {
                "id": "52",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "1"
            },
            {
                "id": "53",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "2"
            },
            {
                "id": "54",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "3"
            },
            {
                "id": "55",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "4"
            },
            {
                "id": "56",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "5"
            },
            {
                "id": "57",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi123"
            },
            {
                "id": "58",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi123"
            },
            {
                "id": "59",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "60",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi"
            },
            {
                "id": "61",
                "sender_id": "17",
                "receiever_id": "9",
                "message": "hi"
            },
            {
                "id": "62",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi demo try"
            },
            {
                "id": "63",
                "sender_id": "9",
                "receiever_id": "5",
                "message": "hi admin bhai"
            },
            {
                "id": "64",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "to all mem broad"
            },
            {
                "id": "65",
                "sender_id": "17",
                "receiever_id": "9",
                "message": "to all mem broad"
            },
            {
                "id": "66",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi cus im admin"
            },
            {
                "id": "67",
                "sender_id": "9",
                "receiever_id": "17",
                "message": "to broad"
            },
            {
                "id": "68",
                "sender_id": "9",
                "receiever_id": "5",
                "message": "to broad"
            },
            {
                "id": "69",
                "sender_id": "17",
                "receiever_id": "9",
                "message": "hi cus3"
            },
            {
                "id": "70",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi cus3"
            },
            {
                "id": "71",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi admin"
            },
            {
                "id": "72",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi demo try"
            },
            {
                "id": "73",
                "sender_id": "9",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "74",
                "sender_id": "9",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "75",
                "sender_id": "9",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "76",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi im demo uh admin?"
            },
            {
                "id": "77",
                "sender_id": "17",
                "receiever_id": "9",
                "message": "hi"
            },
            {
                "id": "78",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "79",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "80",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "81",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi"
            },
            {
                "id": "82",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hi"
            },
            {
                "id": "83",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi"
            },
            {
                "id": "84",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi"
            },
            {
                "id": "85",
                "sender_id": "9",
                "receiever_id": "17",
                "message": "hi"
            },
            {
                "id": "86",
                "sender_id": "9",
                "receiever_id": "17",
                "message": "hi again"
            },
            {
                "id": "87",
                "sender_id": "9",
                "receiever_id": "17",
                "message": "hi 2"
            },
            {
                "id": "88",
                "sender_id": "9",
                "receiever_id": "17",
                "message": "ihi 3"
            },
            {
                "id": "89",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "hij1"
            },
            {
                "id": "90",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi all"
            },
            {
                "id": "91",
                "sender_id": "5",
                "receiever_id": "17",
                "message": "demo try"
            },
            {
                "id": "92",
                "sender_id": "5",
                "receiever_id": "9",
                "message": "hi ti cus3"
            },
            {
                "id": "93",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "94",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "95",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "96",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "ih"
            },
            {
                "id": "97",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hini"
            },
            {
                "id": "98",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "iii"
            },
            {
                "id": "99",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "hi"
            },
            {
                "id": "100",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "1"
            },
            {
                "id": "101",
                "sender_id": "17",
                "receiever_id": "5",
                "message": "2"
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('user_chat_data', null, {});
        await queryInterface.bulkDelete('user_data', null, {});

    }
};
