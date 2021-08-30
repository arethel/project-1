let leftSidePx = 0
let rightSidePx =0
let topSidePx=0
let bottomSidePx=0

let verticalCells = 12
let horizontalCells = 4

let centerOfSetGridX = window.innerWidth/2 + leftSidePx
let centerOfSetGridY = window.innerHeight/2 + topSidePx

class Normal{

    
    constructor(normal){
        this.#normal = normal
        this.#defNormal = normal
        this.newNormal()
        $(window).on("resize", ()=>this.newNormal())
    }
    #normal=35
    #sizeOfHex = null
    #defNormal = 35

    newNormal(){
        let newNormalBottom=(window.innerHeight-bottomSidePx-centerOfSetGridY)/verticalCells
        let newNormalTop=(centerOfSetGridY-topSidePx)/verticalCells
        let newNormalOfSizeRight=Normal.getNormalOfSize((window.innerWidth-rightSidePx-centerOfSetGridX)/(horizontalCells*1.5+1))
        let newNormalOfSizeLeft=Normal.getNormalOfSize((centerOfSetGridX-leftSidePx)/(horizontalCells*1.5+1))
     
        let minNormal = Math.min(newNormalBottom,newNormalTop,newNormalOfSizeLeft,newNormalOfSizeRight)
        if(this.#defNormal>minNormal)
            this.#normal = minNormal
        else
            this.#normal = this.#defNormal
        this.#sizeOfHex = Normal.getSizeOfHex(this.#normal)
        
    }

    get sizeOfHex(){
        return this.#sizeOfHex
    }

    get normal(){
        return this.#normal
    }

    set normal(normal){
        this.#normal = normal
        this.newNormal()
    }

    set defNormal(defNormal){
        this.#defNormal = defNormal
    }

    get defNormal(){
        return this.#defNormal
    }

    static getSizeOfHex(norm){
        return 2 * norm / Math.sqrt(3)
    }

    static getNormalOfSize(size){
        return size*Math.sqrt(3)/2
    }

}


let normal = new Normal(32)
