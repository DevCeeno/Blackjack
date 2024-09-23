 let cards = []
 let sum = 0 
 let hasBlackJack = false
 let isAlive = false
 let message = ""
 let player = {
     name : "kelvin",
     chips : 21,

 }
 let messageEl = document.getElementById("message-el")
 let cardEl = document.getElementById("card-el")
 let sumEl = document.getElementById("sum-el")
 let playerEl = document.getElementById("player-el") 
 let startBtn = document.getElementById("start-btn")
 let newCard = document.getElementById("new-card")
 playerEl.innerHTML = player.name + ": $" + player.chips
 
 function getRandomCard() {
     let numbers = Math.floor(Math.random() * 13) + 1
     if (numbers === 1) {
         return 11
     }
     else if (numbers > 10) {
         return 10
     }
     else{
         return numbers
     }
 }
 startBtn.addEventListener("click", function () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard] 
    sum = firstCard + secondCard
     renderGame()  
 })
 function renderGame() {
    cardEl.textContent = "cards:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "      
    }
    sumEl.textContent = "sum: " + sum
     if (sum <= 20) {
         message = "do you want to draw a new card"
     } else if (sum === 21) {
         message = "you've got blackJack"
         hasBlackJack = true
     } else {
         message = "you're out of the game"
         isAlive = false
     }
     messageEl.textContent = message

 }
 newCard.addEventListener("click", function () {
    if (isAlive === true && hasBlackJack === false ) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }    
 })

 
