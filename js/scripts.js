$(document).ready(function(){
$('top-navigation').waypoint(function(direction) {
  if (direction === 'down') {
    $('#nav-scroll').addClass('red');
  }
  else {
    $('#nav-scroll').removeClass('red');
  }
});
});
