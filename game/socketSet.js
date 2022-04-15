
if (sessionStorage.getItem('HFroom') != null) {
    
}
else {
    // console.log(window.location.origin);
    window.location.href = window.location.origin+'/menu/'
}

const socket = io.connect();



socket.on('get-room', function () {
    socket.emit('receive-room', sessionStorage.getItem('HFroom'),'/play/')
})


socket.on('syncTimer', function (time) {
    timer.counter = time
})

socket.on('redirect', function(url){
    window.location.href = window.location.origin+url
})


socket.on('message', function (mess) {
    console.log(mess);
})
