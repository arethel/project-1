let player = sessionStorage.getItem('HFroom')



let grid
let knight0
let knight1
let timer
testScene()

function testScene(){
    document.title = 'player '+player


    grid = new Grid(horizontalCells,verticalCells,[centerOfSetGridX,centerOfSetGridY],true)

    knight0 = new Knight(player,[6,0])

    knight1 = new Knight(1,[5,0])


    timer = new Timer()
}

