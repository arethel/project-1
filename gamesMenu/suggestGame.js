function suggestGame(data) {
    socket.emit('requestForGame',Number(data.id))
}

socket.on('answerOnRequest', function (ans) {
    if (ans) {
        
    }
    else {
        alert('Пользователь отказался от игры.')
    }
})



socket.on('takeRequest', function (id) {
    let ans = confirm('Принять игру от ' + id + '?')
    socket.emit('answerOnRequestServer', [id, ans])
})
