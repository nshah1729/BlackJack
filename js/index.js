let player={
    Name:"Nishant",
    Chips:145
}
document.getElementById("player-el").textContent=player.Name+" : $"+player.Chips
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "hey"
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")


function getRandomCard(){
    let x=(Math.floor(13*Math.random())+1)
    if(x==1){
        return 11
    }
    else if(x>=11){
        return 10
    }
    return x
}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
let secondCard = getRandomCard() 
cards=[firstCard,secondCard]
sum=firstCard+secondCard
    renderGame()
}
function renderGame() {
    cardEl.textContent="Cards: " 
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
     document.getElementById("message-el").textContent=message
     document.querySelector("#sum-el").textContent="Sum:"+sum
    
}
function newCard(){
    if(isAlive&&document.getElementById("message-el").textContent!="You've got Blackjack!"){
    console.log("Drawing a new card from the Deck!")
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
} 
   


