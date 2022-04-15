function getListOfPlayersOnline(IOconnections,id) {
    let arrPlayers = []
    IOconnections.forEach((value,key) => {
        if (arrPlayers.indexOf(value) < 0&& value!=id)
            arrPlayers.push(value)
    });
    return arrPlayers
}

function reloadTable(socket, IOconnections) {
    
    socket.on('reloadGamesTable', function (id) {
        socket.emit('uploadGamesTable', getListOfPlayersOnline(IOconnections,id))
    })
}

module.exports = {reloadTable}