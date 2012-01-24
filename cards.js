/*
	Assumptions:
	no issue with things being on the global namespace, i would normally do something like
	this abstracts the shuffle algorithm from the actual deck.

	So the following are examples of two functions that could be taken as an argument to shuffle the deck

	An assumption on card object, as javascript has no formal type for enumeration, would just represent cards a number 

	1,2,3,4,5,6,7,8,9,10,J=11,Q=12,K=13,A=14

	and some sort of similar value for the type of card

	club = 1, spades = 2 etc

	Then simply use this in an index as a member of the Function Deck  (note: not the prototype) for display.
	This is probably more efficient for storage as the engine can store the entire array as Smi(both v8 and tracemonkey do this) rather than a mixed type array.
	The sort would then just rank on order to 
	Namespace.Deck.Suits = ["club","Spades"];

	Namespace.Deck = function(cards,shuffle) {
		this.shuffle = shuffle;
		this.cards = cards; //assume this is an array
	}

	Namespace.Deck.prototype = {
		shuffle: function() {
			return this.shuffle(this.cards);
		},
		sort: function(comparator) {
			this.cards.sort(comparator)
		}
	};



*/

//implmentation of the Fisher-Yates shuffle
function FisherYatesShuffle(cards,random) {
	//copy the array to avoid mutation
	var tempCards = cards.slice(0),
		temp,
		item;
	//pass in a random for testing purposes
	random = random || Math.random;
	for(var i = 0; i < tempCards.length; i++) {
		item = Math.floor(random() * (tempCards.length - i));
		temp = tempCards[i];
		tempCards[i] = tempCards[item];
		tempCards[item] = temp;
	}
	return tempCards;
}


function DeckSort(firstCard,secondCard) {
	if(firstCard.suit < secondCard.suit) {
		return -1;
	}
	if(firstCard.suit > secondCard.suit) {
		return 1;
	}
	if(firstCard.value < secondCard.value) {
		return 1;
	}
	if(firstCard.value > secondCard.value) {
		return -1;
	}


}
