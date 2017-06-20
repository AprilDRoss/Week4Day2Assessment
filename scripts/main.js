/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

var ace_card = [1,11];

function handValue (hand) {
  var output;
  //check to see if card number is in the array
for (i = 0; i < hand.length; i ++){
  if(hand[i]=== "J"|| "Q" || "K"){
    output += 10;
  }
  else{
    output = output;}
  else{
    if(hand[i]=== "A" && output === 10){
      output += 11;
    }
    else(hand[i]=== "A" && output < 10){
      output += 1;
    }
  }
  elseif (hand[i]=== "2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"10") {
    output += parseInt(hand[i]);
  }

  }

return output;
console.lof(output);


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
