/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

var ace_card = [1,11];

function handValue(hand) {
  var output = 0;
for (var i = 0; i < hand.length; i++){
if(hand[i] === "2"||hand[i] === "3"||hand[i] === "4"||hand[i] ==="5"||hand[i] ==="6"||hand[i] ==="7"||hand[i] ==="8"||hand[i] ==="9"||hand[i] ==="10"){
  output += parseInt(hand[i]);
}else if(hand[i] === "J"||hand[i] ==="Q"||hand[i] ==="K"){
  output += 10;
}else if (hand[i] === "A" && output < 11){
  output += ace_card[1];
}else if(hand[i] === "A" && output >= 11){
  output += ace_card[0];
} if (output > 21){
  output = output - 10;
}
}
return output;


}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
