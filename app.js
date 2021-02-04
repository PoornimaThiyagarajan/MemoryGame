document.addEventListener('DOMContentLoaded',() => {
    const cardArray = [
        {
            name:'bogota',
            img:'images/bogota.png'
        },
        {
            name:'bogota',
            img:'images/bogota.png'
        },
        {
            name:'nixi',
            img:'images/nixi.png'
        },
        {
            name:'nixi',
            img:'images/nixi.png'
        },
        {
            name:'pikachu',
            img:'images/pikachu.png'
        },
         {
            name:'pikachu',
            img:'images/pikachu.png'
        },
         {
            name:'muji',
            img:'images/muji.png'
        },
        {
            name:'muji',
            img:'images/muji.png'
        },
        {
            name:'deddy',
            img:'images/deddy.png'
        },
         {
            name:'deddy',
            img:'images/deddy.png'
        },
         {
            name:'pavi',
            img:'images/pavi.png'
        },
         {
            name:'pavi',
            img:'images/pavi.png'
        }
         
    ]


const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');

    var cardsChosen =[];
    var cardsChosenId =[];
    var cardsWon = [];
    
cardArray.sort(()=>0.5 - Math.random())     
//creating the game board

function createBoard () {
    for(i=0;i<cardArray.length;i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/perry_the_platypus.png')
        card.setAttribute('data-id', i)
        card.addEventListener("click",flipCard);
        grid.appendChild(card)
    }
}
    
// check for card match  
function checkForMatch () {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1] ){
        alert("You've found a match!");
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cardsWon.push(cardsChosen)
    } else
    {
       cards[optionOneId].setAttribute('src', 'images/perry_the_platypus.png')
       cards[optionTwoId].setAttribute('src', 'images/perry_the_platypus.png')
        alert("Try Again!")
    }
    cardsChosen =[];
    cardsChosenId =[];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! you have found them all';
    }
} 
    
// flipcard function
    
function flipCard () {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,500)
    }    
}
 createBoard()   
    
    
})
