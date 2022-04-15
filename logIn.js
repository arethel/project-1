
function logInSocket(socket, connection,IOconnections) {
    socket.on('logIn', function (emailOrNick, pass) {
        
        connection.query(`SELECT * FROM login`, function(err, results) {
            if (err) {
                console.log('Ошибка на сервере: ' + err);
            }
            else {
                let index = results.findIndex(element => element.nickname == emailOrNick || element.email == emailOrNick)
                if (index>-1) {
                    if (results[index].pass == pass) {
                        socket.emit('message', 'Вход успешно выполнен!')
                        socket.join(results[index].id.toString())
                        socket.emit('join-room',results[index].id.toString())
                        IOconnections.set(socket,results[index].id)
                    }
                    else {
                        socket.emit('message', 'Введён неверный пароль!')
                    }
                }
                else {
                    socket.emit('message', 'Такой почты или логина не существупет!')
                }
                
                
            }
          }); 
    })
}

module.exports = { logInSocket }