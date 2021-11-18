let express = require('express')
let port = 3000
let app = express()
let server = require('http').createServer(app)
let io = require('socket.io')(server)
server.listen(port)



let connections = new Map()


//icon
app.use('/favicon.ico', express.static('icon/favicon.ico'));
//


//redirect
app.get("/",function (req, res) {
    res.redirect("/menu")
});


//404
app.get('/404',function(req,res){
    res.sendFile(__dirname+'/404/404.html')
})

app.use('/play',express.static('game'))

app.use('/menu',express.static('menu'))





// let syncTimer = require('./workWithIt/syncTimer')

io.sockets.on('connection', function(socket){
    socket.on('disconnect',function(data){
        connections.delete(socket)
    })

    
    if(connections.size>0){
        let maxInd = 0
        let minInd = 0
        Array.from(connections.values()).forEach(sock => {
            if(sock>=maxInd){
                maxInd = sock+1
            }
            if(sock<=minInd){
                minInd = sock-1
            }
        });
        
        if(minInd>=0)
            connections.set(socket,minInd)
        else
            connections.set(socket,maxInd)
    }else{
        connections.set(socket, 0)
    }

    // socket.on('get player', function(){
    //     socket.emit('set player', connections.get(socket))
    // })
    // if(connections.size>2){
    //     socket.emit('redirect','404')
    // }
    // if(connections.size===2&&!syncTimer.timerOn){
    //     syncTimer.timerOn=true
    //     syncTimer.syncTimer(connections)
    // }


})


