console.log("Week 4 - Day 5 | Project - 1 [11:45 PM] ");

$(document).ready(function () {

  const cells = $(".cell");

  const winnerSpan = $("#winner");
  const turnSpan = $("#turn1");
  const winnerPar = $("#parWinner");
  const turnPar = $("#parTurn");
  const img =$('.img')
  console.log('');

  const restartButton = $("#restart");
  // console.log(cells);
  let turn = "X";
  const O = "O";
  const X = "X";
  let c =1 ;

  cells.click(cellClicked);
  restartButton.click(restartTheGame);

  img.hide();
  winnerPar.hide();
  restartButton.hide();
  const d1 =$('#d2')
  d1.click(()=>{
    d1.html("<img src='https://www.graphicpie.com/wp-content/uploads/2020/11/cyan-among-us-character.png'height='50px' width='50px' /> ")
  })
  
  var audio



  function cellClicked() {
    // console.log(this);
    // this => DOM
    if(c!=0){
      $("<audio></audio>").attr({
        'src':'w.wav',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");
      console.log($(this));
    if ($(this).text() === "") {
      if (turn === X) {
        $('#turn1').attr('src',"https://www.graphicpie.com/wp-content/uploads/2020/11/cyan-among-us-character.png")
        //++++++++++++
        $(this).html("<img src='https://www.graphicpie.com/wp-content/uploads/2020/11/cyan-among-us-character.png'height='70px' width='70px' /> ");
        //turnSpan.text(O);
        //$(this).text(X);
        console.log($(this));
        checkWinner(X);
        turn = O;
        
      } else {
        $('#turn1').attr('src',"https://preview.redd.it/an871k4o1sn51.png?width=440&format=png&auto=webp&s=85dcd6cb73b8760802e254ee14dfa3c7ab444591")
        //$(this).text(O);
        //++++++++++++
        $(this).html("<img src='https://preview.redd.it/an871k4o1sn51.png?width=440&format=png&auto=webp&s=85dcd6cb73b8760802e254ee14dfa3c7ab444591'height='70px' width='70px' /> ");



        //turnSpan.text(X);
        checkWinner(O);
        turn = X;
      }
      // checkWinner(turn);  next player
    } else {
      $(this).css("background-color", "gold");
      setTimeout(() => {
        $(this).css("background-color", "rgba(0,0,0,0.1)");
      }, 250);
    }}
  }

  function restartTheGame() {
    console.log("restart called");
    location.reload();
  }

  function checkWinner(currentPlayer) {
    /* - | \ /
    0 1 2
    3 4 5
    6 7 8
    */
    // console.log(cells);
    // Check Horizontal
    if (
      $(cells[0]).html() === $(cells[1]).html() &&
      $(cells[1]).html() === $(cells[2]).html() &&
      $(cells[0]).html() !== ""
    ) {
      playerWin(currentPlayer);
    } else if (
      $(cells[3]).html() === $(cells[4]).html() &&
      $(cells[4]).html() === $(cells[5]).html() &&
      $(cells[3]).html() !== ""
    ) {
      playerWin(currentPlayer);
    } else if (
      $(cells[6]).html() === $(cells[7]).html() &&
      $(cells[7]).html() === $(cells[8]).html() &&
      $(cells[6]).html() !== ""
    ) {
      playerWin(currentPlayer);
      // Start check Vertical
    } else if (
      $(cells[0]).html() === $(cells[3]).html() &&
      $(cells[3]).html() === $(cells[6]).html() &&
      $(cells[0]).html() !== ""
    ) {
      playerWin(currentPlayer);
    } else if (
      $(cells[1]).html() === $(cells[4]).html() &&
      $(cells[4]).html() === $(cells[7]).html() &&
      $(cells[1]).html() !== ""
    ) {
      playerWin(currentPlayer);
    } else if (
      $(cells[2]).html() === $(cells[5]).html() &&
      $(cells[5]).html() === $(cells[8]).html() &&
      $(cells[2]).html() !== ""
    ) {
      playerWin(currentPlayer);
      // Diagonal  0 4 8   2 4 6
    } else if (
      $(cells[0]).html() === $(cells[4]).html() &&
      $(cells[4]).html() === $(cells[8]).html() &&
      $(cells[0]).html() !== ""
    ) {
      playerWin(currentPlayer);
    } else if (
      $(cells[2]).html() === $(cells[4]).html() &&
      $(cells[4]).html() === $(cells[6]).html() &&
      $(cells[2]).html() !== ""
    ) {
      playerWin(currentPlayer);
    } else {
      // Do nothing
      // you need do think about for draw
      // console.log('DRAW');
    }
  }

  function playerWin(theWinner) {
    if(theWinner=="X"){
      winnerSpan.html("<img src='https://www.graphicpie.com/wp-content/uploads/2020/11/cyan-among-us-character.png'height='70px' width='70px' /> ")
      turnPar.hide(1000);
      turnSpan.hide(1000);
      winnerPar.show(1000);
      restartButton.show(2000);
      c=0;
      $("<audio></audio>").attr({
        'src':'1.wav',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");

    }else{
      winnerSpan.html("<img src='https://preview.redd.it/an871k4o1sn51.png?width=440&format=png&auto=webp&s=85dcd6cb73b8760802e254ee14dfa3c7ab444591'height='70px' width='70px' /> ")
      turnPar.hide(1000);
      turnSpan.hide(1000);
      winnerPar.show(1000);
      restartButton.show(2000);
      c=0;
      $("<audio></audio>").attr({
        'src':'1.wav',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");
    }
  }
});

/*
  STEP 1: Grid Layout [HTML + CSS]
    HTML: use div with id 'board' and 9 div with class 'cell'
    CSS: style grid "board"
    CSS: style width & height "cell"
    HTML: add div id="all"
    HTML: add par "PLAYER TURN:" id='turn'
    HTML: add par "WIN" id='winner'
    HTML: add button "Play Again" id='restart'
    CSS: #all display: grid; && justify-content: center;
    CSS: p text-align: center;    

  STEP 2: When the player click on one of the cell => Show X || O
    show click X
    show click X || O (turn variable to switch between turns)
    Show the turn show turn to which player => PLAYER TURN: X || O
    Extra: 
      Invalid move => background red || can't click 

  NOW. when click on the button 'Play Again' the game will restart or the page will refresh (restart the game)

  STEP 3: When the player select 3 Win (check the winner)
    Build the logic to check if a player win or not [horizontal, vertical, or diagonal]
    Call the function check winner on each turn. if so change the winner p to the player who win
    if not don't do anything

  STEP 4: When a player win 
    Show who is the winner
    Hide the 'turn' p
    Show button say "Play Again" (restart the game)
    Make this button restart the game (refresh the page)
    
  Extra:
    Block clicked on the cell after a player win
    Enhance the design CSS
    Add tone when the player win
    Use Animation
    Change the background in the path that the winner win in
*/
