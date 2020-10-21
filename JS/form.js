class Form {
    constructor(){
        this.input = createInput("")
        this.input.position(windowWidth/2 - 50,windowHeight/2 -50)

        this.button = createButton("Play")
        this.button.position(windowWidth/2,windowHeight/2 + 50)

        this.greeting = createElement("h3")
        this.greeting.position(windowWidth/2,windowHeight/4)
    }
    
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(windowWidth/2 - 50,50)

       

        this.button.mousePressed(()=>{

            this.input.hide()
            this.button.hide()
            
            player.name = this.input.value()
            playerCount += 1
            player.index =  playerCount
            player.updateCount(playerCount)
            player.update()
            this.greeting.html("hi  " + player.name )
            
        })
    }

hideGreeting(){
    this.greeting.hide()
}
}