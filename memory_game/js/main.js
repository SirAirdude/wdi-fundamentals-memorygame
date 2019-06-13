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
	if (cardsInPlay.length === 2)
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
}

function flipCard(cardId)
{
	console.log("User flipped " + cards[cardId].rank);
	console.log("Suit is " + cards[cardId].suit);
	console.log("Image is " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

flipCard(0);
flipCard(2);

