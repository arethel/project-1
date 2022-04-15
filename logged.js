let gLoader = require('./gameLoader')

function checkLogged(socket, IOconnections) {
    return new Promise(function (resolve, reject) {
        socket.on('receive-room', function (room, position) {
            if (room != null) {
                socket.join(room)
                IOconnections.set(socket, Number(room))
                socket.emit('wroteToServer')
                switch (position) {
                    case '/gamesmenu/':
                        resolve(-2)
                        break
                    case '/menu/':
                        socket.emit('redirect', '/gamesmenu/')
                        resolve(Number(room))
                        break
                    case '/play/':
                        if (gLoader.inGame.get(Number(room)) == undefined)
                            socket.emit('redirect', '/gamesmenu/')
                        resolve(Number(room))
                        break
                }
                
            }
            else
                reject(-1)
        })
        socket.emit('get-room')
        
    })
    
    

}
module.exports = {checkLogged}