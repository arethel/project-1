if (sessionStorage.getItem('HFroom') != null) {
    
}
else {
    window.location.href = window.location.origin+'/menu/'
}


const socket = io.connect()

socket.on('get-room', function () {
    socket.emit('receive-room', sessionStorage.getItem('HFroom'),window.location.href.replace(window.location.origin,''))
})

socket.on('redirect', function(url){
    window.location.href = window.location.origin+url
  })
