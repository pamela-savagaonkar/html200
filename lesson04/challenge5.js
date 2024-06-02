var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

for(var suitCounter = 0; suitCounter < suits.length; suitCounter++) {
  for(var rankCounter = 0; rankCounter < 13; rankCounter++) {
     console.log(ranks[rankCounter] + " of " +suits[suitCounter]);
} }