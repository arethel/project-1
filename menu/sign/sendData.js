const socket = io.connect()

socket.on('message', function (mess) {
    alert(mess)
})
socket.on('redirect', function(url){
    window.location.href = window.location.origin+url
  })

socket.on('get-room', function () {
  socket.emit('receive-room', sessionStorage.getItem('HFroom'),window.location.href.replace(window.location.origin,''))
})
  
  
// socket.on('message', function (mess) {
//     console.log(mess)
// })