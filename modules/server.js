// Подключаем express
const express = require('express');
const { request, response } = require('express');
// Создаем express приложение app
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// Хранилище данных
const rooms = new Map();

// GET запрос по url /users
/* Анонимная функция получеает два параметра:
    request - запрос 
    response - ответ
*/
app.get('/rooms', (request, response) => {
    rooms.set('hello', '');
    response.json(rooms);
    // response.send(rooms)
});

app.post('/rooms', (request, response) => {
    console.log("Data adopting")
})

io.on('connection', socket => {
    console.log('socket connect', socket.id)
});

// Слушаем порт 
server.listen(9999, (err) => {
    if (err) { 
        throw Error(err);
    }
    console.log("Server start")
})