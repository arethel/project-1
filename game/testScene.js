let player = 0

socket.emit('get player')

socket.on('set player',function(pl){
    player = pl
    testScene()
})

let grid
let knight0
let knight1
let timer
function testScene(){
    document.title = 'player '+player


    grid = new Grid(horizontalCells,verticalCells,[centerOfSetGridX,centerOfSetGridY],true)

    knight0 = new Knight('Knight',0,[6,0])

    knight1 = new Knight('Knight',1,[5,0])


    timer = new Timer(5)
}
