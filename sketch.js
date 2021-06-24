//whay do we need sketch.js?
//variables store the memory of objects created
var db
var gameState = 0, playerCount, form, player, game
var allPlayers
var car1, car2, car3, car4, cars
var car1Img, car2Img, car3Img, car4Img
var groundImg
var trackImg

function preload() {
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png")
  car3Img = loadImage("images/car3.png")
  car4Img = loadImage("images/car4.png")
  groundImg = loadImage("images/ground.png")
  trackImg = loadImage("images/track.jpg")
}

// function setup executes the function only once
function setup() {
  //the canvas fits the window size of any device
  createCanvas(windowWidth, windowHeight);
  //db directs you to firebase database 
  db = firebase.database()
  //the game object directs you to the Game class 
  game = new Game()
  //the getState function is called and the game refers to the game class
  game.getState()
  //the start function is called and the game refers to the game class
  game.start()
}

//function draw executes the function several times
function draw() {
  //there is a comparison between player count and 4
  if (playerCount === 4) {
    //is gameState at 0 in the start state?
    game.updateState(1)

  }
  //comparison between gameState and 1
  if (gameState === 1) {
    //what does this function do?     
    clear()
    //calls the play function from the Game class
    game.play()
  }
  if(gameState===2){
    game.end()
  }
}