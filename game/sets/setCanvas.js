//CANVAS
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
function canvasSize(){
    let height = window.innerHeight
    let width = window.innerWidth
    canvas.width=width
    canvas.height=height
    canvas.style.top = '0px'
    canvas.style.left = '0px'
    canvas.style.position = 'absolute'
    
}

startSetCanvas()
function startSetCanvas(){
    canvasSize()
}
$(window).on("resize", ()=>startSetCanvas())