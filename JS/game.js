class Game {
 constructor(){}

 getState(){
     var gameStateRef = database.ref("gameState")
     gameStateRef.on("value",function(data){
         gameState = data.val()
     })
}
 
updateState(state){
    var node = database.ref("/")
    node.update({
        gameState : state
    })
}

start(){
    console.log(gameState)
    if (gameState === 0){
        console.log("here")
        player = new Player()
        player.getCount()
        form = new Form()
        form.display()
    }
    car1 = createSprite(windowWidth/2-300,0)
    car2 = createSprite(windowWidth/2-100,0)
    car3 = createSprite(windowWidth/2+100,0)
    car4 = createSprite(windowWidth/2+300,0)
    cars = [car1,car2,car3,car4]


}
 
play(){
    form.hideGreeting()
    Player.getPlayerInfo()
    if(allPlayers !== undefined ){
        var yPos = 200
        var index = 0

        for(var plr in allPlayers){
            yPos = windowHeight - 50 - allPlayers[plr].distance
            cars[index].y = yPos
            if(plr === "player"+player.index){
                cars[index].shapeColor = "red"
                camera.position.x = windowWidth/2
                camera.position.y = cars[index].y
            }
            index = index +1     
        }
    }

    if(keyDown(UP_ARROW)){
        player.distance += 50
        player.update()
    }
    drawSprites();
}
}


