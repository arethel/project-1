
function regSocket(socket, connection) {
    socket.on('register', function (email, nick, pass) {
        connection.query(`INSERT INTO login(nickname, email, pass) VALUES('${nick}', '${email}', '${pass}')`, function(err, results) {
            if (err) {
              if(err.errno==1062)
                socket.emit('message','Такое имя или почта уже существуют!');
              else
                socket.emit('message', 'Ошибка на сервере.');
                console.log('Ошибка на сервере: ' + err)
            } 
            else {
                socket.emit('message', 'Вы успешно зарегистрированы!');
            }
          }); 
    })
}

module.exports = { regSocket }
