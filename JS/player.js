class Player {
    constructor(){
        this.name  = ""
        this.distance = 0
        this.index = 0
    }

    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount = data.val()
        })
   }
    
   updateCount(count){
       var node = database.ref("/")
       node.update({
        playerCount : count
       })
   }

   update(){
       var node = "players/player" + this.index
       database.ref(node).set({
           name : this.name,
           distance : this.distance
       })
   }
   
  static getPlayerInfo(){
       var PlayersRef = database.ref("players")
       PlayersRef.on("value",function(data){
           allPlayers = data.val()
           console.log(allPlayers)
       })
       
       
   }
}