/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
var card_numbers = {
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
};

var face_cards = {
  J: "10",
  Q: "10",
  K: "10",
};
var ace_card1 = 1;
var ace_card11 = 11;

function handValue (hand) {
  var hand_sum;
  //check to see if card number is in the array
for (i = 0; i < hand.length; i ++){
  if (card_numbers[hand[i]] === true){
    hand_sum += card_numbers.indexOf("hand[i]");
  }
  if(face_cards[hand[i]] === true){
    hand_sum += face_cards.indexOf("hand[i]");
  }

  if(ace_card1[hand[i]] === true){
    hand_sum += ace_card1.indexOf("ace_card1");
  }
  else{
    hand_sum += acecard11.indexOf("acecard11");
  }

}
  return hand_sum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
