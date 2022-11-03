const EventEmitter= require("events").EventEmitter

class EEClass extends EventEmitter.EventEmitter {
    constructor(){
        super()
        this.myEvent()
    }
    myEvent =() => {
        this.on("batel",()=>{
            console.log("Queen")})
    }
    activate = () => {
        this.emit("batel")
    }
}

module.exports = new EEClass()