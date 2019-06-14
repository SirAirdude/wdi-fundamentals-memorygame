console.log("Up and running");

var cards = [
	{
		rank: "Queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
		{
		rank: "King",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
		{
		rank: "King",
		suit: "hearts",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

function checkForMatch()
{
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, try again.");
	}
}


function flipCard()
{
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log("Suit is " + cards[cardId].suit);
	console.log("Image is " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2)
	{
		checkForMatch();
	}
}

function createBoard ()
{
	for (var i = 0; i < cards.length; i++)
	{
		var cardElement = document.createElement("img");
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game_board').appendChild(cardElement);
	}
}

createBoard();
