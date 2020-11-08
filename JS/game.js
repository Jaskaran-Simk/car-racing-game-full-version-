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
    //console.log(gameState)
    if (gameState === 0){
        //console.log("here")
        player = new Player()
        player.getCount()
        form = new Form()
      
        form.display()
    }
    car1 = createSprite(windowWidth/2-300,0)
    car1.addImage("car1",car1Img)
    car2 = createSprite(windowWidth/2-100,0)
    car2.addImage("car2",car2Img)
    car3 = createSprite(windowWidth/2+100,0)
    car3.addImage("car3",car3Img)
    car4 = createSprite(windowWidth/2+300,0)
    car4.addImage("car4",car4Img)
    cars = [car1,car2,car3,car4]


}
 
play(){
    form.hideGreeting()
    Player.getPlayerInfo()
    if(allPlayers !== undefined ){
        background(groundImg)
        image(trackImg,75, -windowHeight*6  ,windowWidth - 200,windowHeight*7)
        var yPos = 200
        var index = 0

        for(var plr in allPlayers){
            yPos = windowHeight - 50 - allPlayers[plr].distance
            cars[index].y = yPos
            if(plr === "player"+player.index){
               // cars[index].shapeColor = "red"
               fill("red")
               ellipse(cars[index].x,cars[index].y,70,70)
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

    if(player.distance > 4200){
        gameState = 2
    }

    drawSprites();
}
end(){
console.log("game End")

}
}


