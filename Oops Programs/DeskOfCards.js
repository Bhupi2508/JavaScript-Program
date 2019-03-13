/***************************************************************************************
 * Execution        : Default node             cmd> node DeskOfCards.js 
 *
 * @file            : DeskOfCards.js
 * 
 * @overview        : Program ​ DeckOfCards.java ​ , to initialize deck of cards having suit ("Clubs", "Diamonds"                         "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen",                          "King", "Ace"). Shuffle the cards using Random method and then distribute 9 Cards to 4 Players                      and Print the Cards the received by the 4 Players using 2D Array...
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 13/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var utility = require('../Oops Programs/utility/utility2')
var arr = []
var res = utility.cards();
utility.deskOfCards(res)

