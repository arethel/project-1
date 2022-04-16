let player = sessionStorage.getItem('HFroom')



let grid
let heroes0 = [new Map(), new Map()]
let timer
testScene()

function testScene(){
    document.title = 'player '+player
    
    grid = new Grid(horizontalCells,verticalCells,[centerOfSetGridX,centerOfSetGridY],true)
    
    heroes0[0].set('knight',new Knight(player,[0,0]))
    heroes0[1].set('knight',new Knight(1,[0,0]))

    socket.on('getData', function (heroes) {
        thisHero = new Map()
        anotherHero = new Map()
        heroes[0].forEach(element => {
            thisHero.set(element[0],element[1])
        });
        heroes[1].forEach(element => {
            anotherHero.set(element[0],element[1])
        });
        
        heroes0[0].forEach((value, key) => {
            let hero = thisHero.get(key)
            for (let key_ in hero) {
                value[key_]=hero[key_]
            }
        })
        
        heroes0[1].forEach((value, key) => {
            let hero = anotherHero.get(key)
            for (let key_ in hero) {
                value[key_]=hero[key_]
            }
        })
    })
    
    


    timer = new Timer()
}

