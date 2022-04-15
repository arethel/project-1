let express = require('express')
let port = 3000
let app = express()
let server = require('http').createServer(app)
let io = require('socket.io')(server)
server.listen(port)

let mysql = require('mysql')

let SQLconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'12345678',
    database: 'logins'
})

SQLconnection.connect(function(err) {
    if (err) {
      console.error('error: ' + err.message);
      return;
    }
   
    console.log('connected');
  });



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

app.use('/menu', express.static('menu'))

app.use('/gamesmenu',express.static('gamesMenu'))

let IOconnections = new Map()

let registration = require('./registration')
let logIn = require('./logIn')
let logged = require('./logged')
let gamesTable = require('./gamesTable')
let sendRG = require('./sendRequestGame')
let gameLoader = require('./gameLoader')

sendRG.io=io




let waitingForStartGame1 = new Map()
let waitingForStartGame2 = new Map()
let gameConfirmed = new Map()

io.sockets.on('connection', function (socket) {
    
    
    IOconnections.set(socket, -1)
    socket.on('disconnect',function(data){
        IOconnections.delete(socket)
    })
    
    
    let checkForLogin = logged.checkLogged(socket, IOconnections)
    
    checkForLogin.then(
        result => {
            if (result == -2) { 
                gamesTable.reloadTable(socket, IOconnections)
                let getAns = sendRG.getRequest(socket, IOconnections,io)
                getAns.then(
                    result => {
                        waitingForStartGame1.set(result[0], result)
                        waitingForStartGame2.set(result[1], result)
                        gameConfirmed.set(result,[false,false])
                    },
                    error => {
                    }
                )
            }
            else {
                firstPlayer = waitingForStartGame1.get(result)
                secondPlayer = waitingForStartGame2.get(result)
                if (firstPlayer != undefined) {
                    let confirms = gameConfirmed.get(firstPlayer)
                    confirms[0] = true
                    if (confirms[0] == true && confirms[1] == true) {
                        gameLoader.createGame2(firstPlayer,io)
                    }
                }
                else if (secondPlayer != undefined) {
                    let confirms = gameConfirmed.get(secondPlayer)
                    confirms[1] = true
                    if (confirms[0] == true && confirms[1] == true) {
                        gameLoader.createGame2(secondPlayer,io)
                    }
                }
                else {
                    socket.to(result.toString()).emit('redirect','/gamesMenu/')
                }
            }
        },
        error => {
            registration.regSocket(socket,SQLconnection)
            logIn.logInSocket(socket, SQLconnection, IOconnections)
        }
    )
    
    
    
    
    


})



