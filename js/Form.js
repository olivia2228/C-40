class Form {
    constructor() {
        //is createInput a pre-defined function?
        //creates input box
        this.input = createInput("name")
        //is createButton a pre-defined function?
        //creates submit button
        this.button = createButton("Red Button")
        //creates greeting
        //what does h2 stand for?
        //why can't we write createGreeting for greeting 
        this.greeting = createElement("h2")
        this.reset = createButton("reset")
    }
    hide() {
        //hides the input
        this.input.hide()
        //hides the button
        this.button.hide()
        //hides the greeting
        this.greeting.hide()
    }
    display() {
        //what does h1 stand for
        //why can't we make title in constructor
        //creates title
        var title = createElement("h1")
        //why do we write html for displaying the title input
        title.html("Car Racing Game")
        //positions the title
        title.position(windowWidth / 2, 20)
        //positions the input                     
        this.input.position(windowWidth / 2, windowHeight / 2)
        //positions the button
        this.button.position(windowWidth / 2, windowHeight / 2 + 50)
        this.reset.position(10,10)
        //what is the arrow function?
        //mousePressed function is defined
        this.button.mousePressed(() => {
            //hides the input 
            this.input.hide()
            //hides the button
            this.button.hide()
            //stores the input value in name variable of Player class
            player.name = this.input.value()
            //increases the playerCount by 1
            playerCount = playerCount + 1
            //player index is equal to player count
            player.index = playerCount
            //calls the update function from the Player class
            player.update()
            //updates player count from the Player class
            player.updatePlayerCount(playerCount)
            //dispalys the greeting
            this.greeting.html("hello " + player.name)
            //positions the greeting
            this.greeting.position(windowWidth / 2, windowHeight / 2)
        })

        this.reset.mousePressed(()=>{
            db.ref("/").set({gameState:0,playerCount:0})
            location.reload()
        })

    }
}