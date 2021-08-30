const socket = io.connect();
socket.on('redirect', function(url){
  window.location.href = window.location.href+url
})