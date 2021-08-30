class Hexagon{
    #num=[0,0]
    #xOy = [0,0]
    constructor(num,xOy){
        this.#num=num
        this.#xOy=xOy
        this.#drawHexagon()
    }

    #img=null
    #src='sources/hex.png'
    
    #drawHexagon() {
        let div = document.getElementById('hexes')
        if(div===null) return
        let name = 'hex'+this.#num[0]+'x'+this.#num[1]
        let posForImgInPx=this.#getPosForSetImgOfHex()
        let hex = null
        hex = createImg(div,name,this.#src,(Normal.getSizeOfHex(normal.normal+2))*2,(normal.normal+2)*2,posForImgInPx[0],posForImgInPx[1],'hexagon')
        this.#img=hex
    }

    set src(src){
        this.#src = src
        this.#img.src=src
    }

    get src(){
        return this.#src
    }

    get img(){
        return this.#img
    }

    get num(){
        return this.#num
    }

    set xOy(xOy){
        this.#xOy=xOy
        let posForImgInPx=this.#getPosForSetImgOfHex()
        setImgSizeOffset(this.#img,(Normal.getSizeOfHex(normal.normal+2))*2,(normal.normal+2)*2,posForImgInPx[0],posForImgInPx[1])
    }

    get xOy(){
        return this.#xOy
    }

    #getPosForSetImgOfHex(){
        return [this.#xOy[0]-normal.sizeOfHex,this.#xOy[1]-normal.normal]
    }

    deleteHex(){
        this.#img.parentNode.removeChild(this.#img)
    }

}


