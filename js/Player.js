class Player {
    constructor() {
        //name is null
        this.name=null
        //distance is equal to 0
        this.distance=0
        //index is null
        this.index=null
    }
    getPlayerCount() {
        //refers the player count ref to db's values of player count
        var playerCountRef = db.ref("playerCount")
        //creates a continuous listener for playerCountRef to keep listening to the update in data
        playerCountRef.on("value", function (data) {
            //val() extracts the important data from playerCount child of database
            playerCount = data.val()
        })
    }
    //updates player count
    updatePlayerCount(count) {
        //what does this "/" stand for?
        //what does this : stand for?
        db.ref("/").update({ playerCount: count })
    }
    //calls update function
    update(){
        //
        var playerIndex="players/player"+this.index
        db.ref(playerIndex).update({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        db.ref("players").on("value",(data)=>{
            allPlayers=data.val()
        })   
    }
}