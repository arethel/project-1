class Timer{

    counter
    timeout
    match
    timer
    constructor(timer, match) {
        this.match = match
        this.timer = timer
        this.setNewTimer()
        
    }
    
    setNewTimer() {
        this.counter = this.timer
        
        this.timeout = setInterval(() => {
            
            this.counter = this.counter - 1
            if (this.counter <= 0){
                clearInterval(this.timeout)
                this.match.setNewTimeAfterZero()
            }
        },1000)
    }
    
}

module.exports = {
    Timer
}
