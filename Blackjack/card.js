var cardArray = [];
var suits = ["diamonds", "spades", "clubs", "hearts"]
var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var player1Hand = [], player2Hand = [];
var player1point = 0
var player2point = 0



function fill() {
	var deck = []
	for(var i = 0; i <= 53; i++)
		deck[i] = i;
	

	shuffle(deck)
	//give(deck)
}

function shuffle(deck) {
    

    for (var i = 0; i < 1000; i++)
	{
      
		
	    var placeUno = Math.ceil((Math.random() * deck.length))
		var placeDos = Math.ceil((Math.random() * deck.length))
		var change = deck[Math.ceil((Math.random() * deck.length))]

		deck[placeUno] = deck[placeDos];
		deck[placeDos] = change;
	}                                        

	return deck;

}
/*
function give(deck) {
	var i = 0
	while(i != deck.length){
		player1Hand.push(deck[i])
		player2Hand.push(deck[(i + 1)])
		i+=2
	}
	
}
*/
//each win gives one point
function start(deck) {
	console.log('Let us play boys')

	var card = Math.ceil(Math.random() * 53)
	var playingcard1 = deck[card]
	var card2 = Math.ceil(Math.random() * 53)
	var playingcard2 = deck[card2]
	

	document.getElementById('card-img').src = 'PNG/card' + playingcard1 + '.png'
	document.getElementById('card-img').alt = 'Card is' + playingcard2
	
	return playingcard
}


function compare(playercard1, playercard2) {
	if(playercard1 > playercard2)
	{
		player1point++

	}
	else if(playercard2 > playercard1)
	{
		player2point++
	}
	else if(playercard1 = playercard2){
		console.log('bruh issa tie')
	}
}

function winner(player1point, player2point){
	if(player1point === 10)
	{
		console.log('player 1 is the winner')
	}
	else if(player2point === 10)
	{
		console.log('player 2 is the winnner')
	}
}















/*function getDeck()
{
	deck = new Array();

	for(var i = 0; i <= numbers.length-1; i++)
	{
		for(var j = 0; j <= suits.length-1; x++)
		{
			var overten = parseInt(numbers[i])
			if(values[i] == "J")
				overten = 11
			else if(values[i] == "Q")
				overten = 12
			else if(values[i] == "K")
				overten = 13
			else if(values[i] == "A")
				overten = 14

			var card = {Value: numbers[x], Suits: suits[i], Overten: overten} //copied
			deck.push(card) //copied
		}
	}

	return deck;
}
*/
/*function showDeck()
{
	document.getElementById('deck').innerHTML = ''

	for(var i = 0; i <= deck.length-1; i++)
	{
		var card = document.createElement("div")
		var visual = ''
		if (deck[i].Suit == 'hearts')
		visual ='hearts'
		else if (deck[i].Suit == 'spades')
		visual = 'spades'
		else if (deck[i].Suit == 'diamonds')
		visual = 'diamonds'
		else
		visual = 'clubs'

		card.innerHTML = deck[i].Value + '' + icon;
		card.className = 'card';
		document.getElementById("deck").prepend(card);
	}
}

function get()
{
	deck = getDeck()
	shuffle()
	showDeck()
}



function play()
{
	for(var i = 0; i<= 3; i++)
	{
		for(var j = 0; j <= 3; j++)
		{
			var card = deck.pop();
            players[j].Hand.push(card); //installed pokersolver package
            VisualizeCard(card, j);
            updateScore();
		}
	}
		updateDeck()
}

function updateScore()
{
	for (var i = 0; i <= 3; i++)
	{
		getScore(i);
		document.getElementById('points_' + i).innerHTML = players[i].Points;
	}
}
//get CardUI
function getScore()
{
	var points = 0
	if()
	


}

//window.onload = load



*/





