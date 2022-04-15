let gameLoader = require('./gameLoader')




function getRequest(socket, IOconnections,io) {
    return new Promise(function (resolve, reject) {
        socket.on('requestForGame', function (id) {
            socket.to(id.toString()).emit('takeRequest', IOconnections.get(socket))
            setTimeout(() => {
                socket.emit('answerOnRequest', false)
                reject()
            }, 10000)
        })
        socket.on('answerOnRequestServer', function (data) {
            socket.to(data[0].toString()).emit('answerOnRequest', data[1])
            if (data[1] == true) {
                resolve(gameLoader.createGame(IOconnections.get(socket), data[0],io))
            }
            reject()
        })
        
    })
}

module.exports = {getRequest}