$(document).ready(function() {
  
  $('#roller button.add').on('click', function() {
    var die = new Die()
    die.display_die()
    dice.push(die)
  });

  $('#roller button.roll').on('click', function() {
    roll_all_dice()
    display_all(dice);
  });
});

var dice = new Array();

function roll_all_dice(){
  $.each(dice,function(key, dice) {
      this.roll();
    });
}

function display_all(array_of_dice){
  $('.dice').empty()
  $.each(array_of_dice,function(key, dice) {
    this.display_die()
  });
}

//Die class
function Die(){
  this.value = 0;
}

Die.prototype.roll = function(){
  this.value = Math.floor((Math.random()*6)+1);
}

Die.prototype.display_die = function(){
  $('.dice').append('<div class="die">'+ this.value +'</div>');
}
