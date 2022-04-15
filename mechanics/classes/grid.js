
let Hexagon = require('./hexagon')

class Grid {

    #allHexes = new Map()
    get allHexes() { return this.#allHexes }
    
    #extraObjects = new Map()
    get extraObjects() { return this.#extraObjects }

    #hor
    get hor() { return this.#hor }

    #ver
    get ver() { return this.#ver }
    

    constructor(hor, ver) {
        this.#hor = hor
        this.#ver = ver

        this.#createGrid()
    }

    #createGrid() {
        for (let i = -this.#hor; i <= this.#hor; i++) {
            for (let j = Math.round(Math.abs(i) / 2); j < this.#ver - Math.trunc(Math.abs(i) / 2); j++) {
                let newHex = new Hexagon([j, i])
                this.#allHexes.set(JSON.stringify([j, i]), newHex)
            }
        }
    }

}

module.exports = Grid