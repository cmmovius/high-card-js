var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  //Populates the deck array with 52 standard playing cards.
  buildDeck: function(){
    //console.log(this);

    //for loop to output values four times
    var max = suits.length;
    for (var i = 0; i < max; i++) {
        for (var j = 0; j < values.length; j++) {
        game.deck.push([values[j],suits[i]]);
      }

    }

  },

  //Randomizes the order of deck.
  shuffleDeck: function(){

  },

  //Asks the user if they want to add an additional player to the game.
  //If they do, the player is added to the players array. If not, the script continues.
  getMorePlayers: function(){

  },

  //Assigns one card to each player.
  deal: function(){

  },

  //Finds the player with the highest card. Aces are high.
  //For now, don't worry about ties, nor about one suit being more valuable than another suit.
  findHighestCard: function(){

  },

  //Alerts the card each player drew, their name, and their ranking.
  //For example, "Alice is number 1 with the 9 of Spades! Bob is number 2 with the 6 of diamonds!"
  //(Dialogs are annoying. How could you show all this in one alert box, rather than one for each player?)
  announceWinners: function(){

  },

  //Runs all the previous methods in the proper order.
  playANewGame: function(){

  }
}

//game.buildDeck.call();
