
startOnResize()
function startOnResize(){
    centerOfSetGridX = window.innerWidth/2 + leftSidePx
    centerOfSetGridY = window.innerHeight/2 + topSidePx
    if(grid!==undefined)
        grid.xOy=[centerOfSetGridX,centerOfSetGridY]
    
}
$(window).on("resize", ()=>startOnResize())

