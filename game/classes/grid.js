class Grid{

    #xOy = [0,0]
    get xOy(){ return this.#xOy }

    #allHexes = new Map()
    get allHexes(){ return this.#allHexes }
    
    #extraObjects = new Map()
    get extraObjects(){ return this.#extraObjects }

    #leftGridSide = null
    get leftGridSide(){ return this.#leftGridSide }

    #rightGridSide = null
    get rightGridSide(){ return this.#rightGridSide }

    #topGridSide = null
    get topGridSide(){ return this.#topGridSide }

    #bottomGridSide = null
    get bottomGridSide(){ return this.#bottomGridSide }

    #width = null
    get width(){return this.#width}

    #height = null
    get height(){return this.#height}

    #center
    #hor
    get hor(){return this.#hor}

    #ver
    get ver(){ return this.#ver }
    
    #pos=[0,0]
    get pos(){ return this.#pos }

    constructor(hor,ver,xOy,center){
        this.#center=center
        this.#hor=hor
        this.#ver=ver
        this.#xOy=xOy

        this.#createGrid()
        

    }

    #createGrid() {
        this.#setGridSize()
        createDiv(document.body,'hexes')
        for(let i = -this.#hor;i<=this.#hor;i++){
            let x = this.#pos[0]+this.#width/2+i*1.5*normal.sizeOfHex
            for(let j = Math.round(Math.abs(i)/2);j<this.#ver-Math.trunc(Math.abs(i)/2);j++){
                let y = this.#pos[1]+normal.normal*(Math.abs(i)%2===0?1:0)+normal.normal*j*2
                let newHex = new Hexagon([j,i],[x,y])
                this.#allHexes.set(JSON.stringify([j,i]),newHex)
            }
        }
    }

    #setGridSize(){
        this.#width=(1+this.#hor*3)*normal.sizeOfHex
        this.#height=this.#ver*2*normal.normal

        if(this.#center)
            this.#pos=[this.#xOy[0]-this.#width/2,this.#xOy[1]-this.#height/2]
        else
            this.#pos=[this.#xOy[0],this.#xOy[1]]
        
        this.#topGridSide=this.#pos[1]
        this.#leftGridSide=this.#pos[0]
        this.#bottomGridSide=this.#topGridSide+this.#height
        this.#rightGridSide=this.#leftGridSide+this.#width

    }

    set xOy(xOy){
        this.#xOy=xOy
        this.#setGridSize()

        this.#allHexes.forEach((value,key)=>{
            let hexNum = JSON.parse(key)
            let x = this.#pos[0]+this.#width/2+hexNum[1]*1.5*normal.sizeOfHex
            let y = this.#pos[1]+normal.normal*(Math.abs(hexNum[1])%2===0?1:0)+normal.normal*hexNum[0]*2
            value.xOy = [x,y]
        })

        Array.from(this.#extraObjects.values()).forEach(arr=>{arr.forEach(item=>{
            let xOy = this.#allHexes.get(JSON.stringify(item.num)).xOy
            item.xOy=xOy
        })})

    }



    

    addObj(obj,player){
        let arrOfPlayer = this.#extraObjects.get(player)
        if(arrOfPlayer===undefined){
            this.#extraObjects.set(player,[obj])
        }
        else{
            arrOfPlayer.push(obj)
        }
    }

    deleteObj(obj,player){
        let index = this.#extraObjects.get(player).indexOf(obj)
        if(index!==-1)
            this.#extraObjects.get(player).splice(index,1)
    }

    deleteGrid(){
        this.#allHexes.forEach((value,key)=>{
            value.deleteHex()
        })
        this.#allHexes.clear()
        Array.from(this.#extraObjects.values()).forEach(arr=>{arr.forEach(item=>{
            item.delete()
        })})
        this.#extraObjects.clear()
    }

}



