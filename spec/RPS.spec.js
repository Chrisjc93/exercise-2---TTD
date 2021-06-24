const whoWon = require('../RPS.js');
const assert = require('assert');


describe("whoWon", function(){

   it("returns 'TIE!' when player 1 and player 2 enter the same choice.", function(){
      let p1 = "rock";
      let p2 = "rock";
      let output = whoWon.whoWon(p1,p2);
      expect(output).toEqual("TIE!");
   });

   it("returns 'Player 2 wins!' when player 1 enters 'rock' and player 2 enters 'paper'.", function(){
      let p1 = "rock";
      let p2 = "paper";
      let output = whoWon.whoWon(p1,p2);
      expect(output).toEqual("Player 2 wins!");
   });

   it("returns 'Player 2 wins!' when player 1 enters 'paper' and player 2 enters 'scissors'.", function(){
      let p1 = "paper";
      let p2 = "scissors";
      let output = whoWon.whoWon(p1,p2);
      expect(output).toEqual("Player 2 wins!");
   });

   it("returns 'Player 2 wins!' when player 1 enters 'scissors' and player 2 enters 'rock'.", function(){
      let p1 = "scissors";
      let p2 = "rock";
      let output = whoWon.whoWon(p1,p2);
      expect(output).toEqual("Player 2 wins!");
   });

    it("returns 'Player 2 wins!' when player 1 enters 'scissors' and player 2 enters 'rock'.", function(){
      let p1 = "1";
      let p2 = "rock";
      let output = whoWon.whoWon(p1,p2);
      expect(output).toEqual("invalid input!");
   });    

});
