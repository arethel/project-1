class Hexagon{
    #num=[0,0]
    constructor(num){
        this.#num=num
    }

    get num(){
        return this.#num
    }
}

module.exports = Hexagon

