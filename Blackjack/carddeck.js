var cardArray = [];
var suits = ["diamonds", "spades", "clubs", "hearts"]
var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var player1Hand = [], player2Hand = [];
var currentPlayer = 0;


function fill() {
	var deck = []
	for(var i = 0; i <= 53; i++)
		deck[i] = i;
	

	shuffle(deck)
	give(deck)
}

function shuffle(deck) {
    

    for (var i = 0; i < 1000; i++)
	{
      

	    var placeUno = Math.ceil((Math.random() * deck.length))
		var placeDos = Math.ceil((Math.random() * deck.length))
		var change = deck[location1]

		deck[placeUno] = deck[placeDos];
		deck[placeDos] = change;
	}

	return deck;

}
function give(deck) {
	var i = 0
	while(i != deck.length){
		player1Hand.push(deck[i])
		player2Hand.push(deck[(i + 1)])
		i+=2
	}
	$('.playCount').html("Player cards: " + playerHand.length);
	$('.compCount').html("Computer cards: " + compHand.length);
	$('.result').html("");
}

function play() {

	//if a card is already in the slot, removes card. Also shows "New Game" button if hidden
	/*$('.playerCard').html("");
	$('.compCard').html("");
	$('.newGame').show();
*/
	//sets current card for each hand
	player1Card = player1Hand[0];
	Player2Card = Player2Hand[0];

	//creates an image element for the current card in each hand
	var img = document.createElement('img');
	var img2 = document.createElement('img');

	img.src = ("img/cards/" + player1Hand[0] + ".png");
	img2.src = ("img/cards/" + Player2Hand[0] + ".png");

	//adds card image to the card slot of the game board
	$('.playerCard').append(img).animateCss("flipInYRev");
	$('.compCard').append(img2).animateCss("flipInY");

	//calls compare function to compare current cards
	compare(player1Card, Player2Card);
}

function compare(player1, player2) {
	
	//if player's card value is higher than the computer's card value, player wins
	if((player1 % 13) > (player2 % 13)) {
	
		//updates result div of the game board
		$('.result').html("Player wins!").animateCss("flipInX");
		
		//pushes current cards from each hand to the back of the player's hand
		playerHand.push(player2);
		playerHand.push(player1);

		//removes current card from the front of each deck
		player1Hand.shift();
		player2Hand.shift();

		setTimeout(function() {
			moveCards('player');
		}, 1500);

		//update card counts and check for a winner
		updateCount();
		checkWin();
	}

	else if ((player % 13) < (player2 % 13)) {
		
		//update the results div of the game table
		console.log('Computer Wins!')
		
		//pushes current cards from each hand to the back of the computer's hand
		compHand.push(player1);
		compHand.push(player2);

		//removes current card from the front of each deck
		player2Hand.shift();
		player1Hand.shift();

		setTimeout(function() {
			moveCards('comp');
		}, 1500);

		//update card counts and check for a winner
		updateCount();
		checkWin();
	}

	else if((player1 % 13) === (player2 % 13))
	{
		tie();
	}
}

function tie() {
	console.log("It's a Tie!, time to compare")
	warArray()
}

function warArray() {
	var cardStr = ""
	var length = 0

	if(player1Hand.length < 3 || player2Hand < 3)
	{
		if(player1Hand.length > player2Hand.length)
		{
			length = player2Hand.length-1
		}
		else if(player2Hand.length > player1Hand.length)
		{
			length = player1Hand.length-1
		}
	}
	else{
		length = 2
	}

	for(var i = 0; i < length; i++){
		cardArray.push(playerHand[0])
		playerHand.shift()
		cardArray.push(player2Hand[0])
		player2Hand.shift()
		cardStr += '<img src="img/cardback.jpg">'
	}

	$(".playerWarFinal").html("<img src='img/cards/"+playerHand[0]+".png'>").animateCss("flipInYRev");
	$(".playerWarCards").html(cardStr);
	$(".compWarCards").html(cardStr);
	$(".compWarFinal").html("<img src='img/cards/"+compHand[0]+".png'>").animateCss("flipInY");

	//compare the new current card from each deck
	WarCompare(playerHand[0], compHand[0]);
}


function WarCompare(player1, player2) {
	if((player1 % 13) > (player2 % 13)) {
	
		console.log('Player Wins!')
		
		//pushes entire war array to the back of the player's hand
		player1Hand.push.apply(player1Hand, cardArray);

		//pushes both current cards (War cards) to back of the player's hand
		player1Hand.push(player2);
		player1Hand.push(player1);
		
		//removes current card from both hands
		player1Hand.shift();
		player2Hand.shift();
		
		//resets the war array to empty
		cardArray.length = 0;

		setTimeout(function() {
			moveCards("playerWar");
			moveCards("player");
		}, 3000);

		setTimeout(function() {
			$("#warArea").hide();
		}, 3500);

		//update card count and check for a winner
		updateCount();
		checkWin();
	}

	//if computer's War card value is greater than the player's War card value, computer wins the tie
	else if ((player % 13) < (comp % 13)) {
		
		//update result section of the game board
		$('.result').html("Computer wins!");
		
		//pushes the entire war array to the back of the computer's hand
		compHand.push.apply(player2Hand, cardArray);
		
		//pushes both current cards (War cards) to the back of the computer's hand
		compHand.push(player2);
		compHand.push(player1);

		//removes the current cards from each hand
		player1Hand.shift();
		player2Hand.shift();

		//resets the war array to empty
		cardArray.length = 0;

		setTimeout(function() {
			moveCards("player2War");
			moveCards("player2");
		}, 3000);

		setTimeout(function() {
			$("#warArea").hide();
		}, 3500);

		//update card count and check for a winner
		updateCount();
		checkWin();
	}
}

function checkWin() {
	if(player1Hand.length == 0) {
		console.log("Player 2 wins")
	}
	else if(player2Hand.length ==0){
		console.log("Player 1 wins")
	}
}

function updateCount() {
	$('.playCount').html("Player cards: " + playerHand.length);
	$('.compCount').html("Computer cards: " + compHand.length);
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





