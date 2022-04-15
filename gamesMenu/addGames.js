

function createGame(id) {
    let div = document.createElement('div')
    div.className = 'game'
    div.id = id
    div.textContent = id
    $('.block1')[0].appendChild(div)
}



socket.on('uploadGamesTable', function (data) {
    var container = $('.block1')[0]
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for (i in data){
        createGame(data[i])
    }
    $('.game').on('click', function () {
        suggestGame(this)
    })
    
})
socket.on('wroteToServer', function () {
    socket.emit('reloadGamesTable', Number(sessionStorage.getItem('HFroom')))
    
})

setInterval(()=>{socket.emit('reloadGamesTable', Number(sessionStorage.getItem('HFroom')))},5000)
