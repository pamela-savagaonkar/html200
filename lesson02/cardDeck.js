var suits = [' of Hearts', ' of Clubs', ' of Diamond', ' of Spade'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', ' Jack', ' Queen', ' King', ' Ace'];
var deck = [];
for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
        //console.log(ranks[rankCounter] +suits[suitCounter]);
        deck.push(ranks[rankCounter] +suits[suitCounter]);
}
}
console.log(deck);