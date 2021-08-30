let timeOfTimer= 5
let timer = 5

let timerOn = false

module.exports = {
    timeOfTimer: timeOfTimer,
    timer: timer,
    timerOn: timerOn,
    syncTimer: syncTimer
}

function syncTimer(connections){
    setInterval(function(){
        timeOfTimer=timeOfTimer-0.1
        Array.from(connections.keys()).forEach(socket=>{
            socket.emit('syncTimer', timeOfTimer)
        })
        if(timeOfTimer<=0.1)
            timeOfTimer = timer
    },100)
    

}