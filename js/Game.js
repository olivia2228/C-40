class Game {
    constructor() {

    }
    getState() {
        var gameStateref = db.ref("gameState")
        gameStateref.on("value", function (data) {
            gameState = data.val()
        })
    }
    updateState(state) {
        db.ref("/").update({ gameState: state })
    }
    async start() {
        if (gameState === 0) {
            player = new Player()
            var playerCountRef = await db.ref("playerCount").once("value")
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val()
                player.getPlayerCount()
            }

            form = new Form()

            form.display()
        }
        car1 = createSprite(200, 200)
        car2 = createSprite(400, 200)
        car3 = createSprite(600, 200)
        car4 = createSprite(800, 200)
        car1.addImage("car1", car1Img)
        car2.addImage("car2", car2Img)
        car3.addImage("car3", car3Img)
        car4.addImage("car4", car4Img)


        cars = [car1, car2, car3, car4]

    }

    play() {
        form.hide()
        Player.getPlayerInfo()
        if (allPlayers !== undefined) {
            background(groundImg)
            image(trackImg, 0, -windowHeight * 4, windowWidth, windowHeight * 5)
            var index = 0
            var x = 150
            var y = 0

            for (var plr in allPlayers) {
                index = index + 1
                x = x + 200
                y = windowHeight - allPlayers[plr].distance
                cars[index - 1].y = y
                cars[index - 1].x = x
                if (index === player.index) {
                    rectMode(CENTER)
                    fill("red")
                    rect(x,y,100,100)
                    camera.position.x = windowWidth / 2
                    camera.position.y = y
                }
                //text(allPlayers[plr].name+" : "+allPlayers [plr].distance,100,displayPosition)
                //displayPosition=displayPosition+20
            }
            if (keyIsDown(UP_ARROW) && player.index !== null) {
                player.distance = player.distance + 50
                player.update()
            }
            if (player.distance > windowHeight * 5) {
                gameState = 2
            }

            drawSprites()

        }

    }
    end() { console.log("gameEnded") }
}