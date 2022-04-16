let games = []
let gamesData = new Map()
let inGame = new Map()

let defaultKnight = require('./mechanics/heroesClasses/defaultKnight')

let timer = require('./mechanics/classes/timer')

let Grid = require('./mechanics/classes/grid')


class Match{
    
    heroes1 = new Map()
    heroes2 = new Map()
    io
    players = []
    timer
    grid
    constructor(id1, id2, io) {
        this.io = io
        
        this.players.push(id1)
        this.players.push(id2)
        this.grid = new Grid(4,12)
        this.heroes1.set('knight',new defaultKnight.Knight([6, 0], this.grid))
        this.heroes2.set('knight', new defaultKnight.Knight([5, 0], this.grid))
        
        
        this.sendData()
        
        let time = 5
        
        this.timer = new timer.Timer(time,this)
        
        this.io.to(id1.toString()).emit('syncTimer', time)
        this.io.to(id2.toString()).emit('syncTimer', time)
        
        // this.syncTimer(time,10000)
    }
    
    sendData() {
        let heroes = [[], []]
        this.heroes1.forEach((value, key) => {
            heroes[0].push([key, value.createData()])
        })
        this.heroes2.forEach((value, key) => {
            heroes[1].push([key, value.createData()])
        })
        this.io.to(this.players[0].toString()).emit('getData', heroes)
        this.io.to(this.players[1].toString()).emit('getData', [heroes[1],heroes[0]])
    }
    
    setNewTimeAfterZero() {
        this.useAbilities()
        this.timer.setNewTimer()
        this.io.to(this.players[0].toString()).emit('syncTimer',this.timer.counter)
        this.io.to(this.players[1].toString()).emit('syncTimer',this.timer.counter)
    }
    
    useAbilities() {
        Array.from(this.heroes1.values()).forEach(hero => {
            let action = hero.action
            if (action.selected!=-1)
                action.useAbleActions.get(action.selected).funOnTimer()
        })
        Array.from(this.heroes2.values()).forEach(hero => {
            let action = hero.action
            if (action.selected!=-1)
                action.useAbleActions.get(action.selected).funOnTimer()
        })
    }
    
    syncTimer(time,delay) {
        let timeout = setInterval(() => {
            this.io.to(this.players[0].toString()).emit('syncTimer',this.timer.counter)
            this.io.to(this.players[1].toString()).emit('syncTimer', this.timer.counter)
            
                // clearInterval(timeout)
        },delay)
    }
    
}


function createGame(id1, id2,io) {
    let pair = [id1, id2]
    games.push(pair)
    inGame.set(pair[0], pair[1])
    inGame.set(pair[1], pair[0])
    io.to(id1.toString()).to(id2.toString()).emit('redirect', '/play/')
    return pair
}

function createGame2(pair, io) {
    let match = new Match(pair[0], pair[1], io)
    gamesData.set(pair, match)
    
    io.to(pair[0].toString()).to(pair[1].toString()).emit('gameStarted')
}

module.exports = {
    createGame,
    createGame2,
    games,
    gamesData,
    inGame
}