<<<<<<< HEAD
var color = '#FFFF99';
var waypoint = new Waypoint({
  element: document.querySelector('.introduction'),
  handler: function(direction) {
    var nav = document.querySelector('nav');
    var background = nav.style.background;
    if (direction === 'up') {
      if (background === '#FFFF99') {
        nav.style.background = 'orange';
      }
      else {
        nav.style.background = '#FFFF99';
      }
    }
  }
});

var imageWaypoint = new Waypoint({
  element: document.querySelector('.introduction'),
  handler: function(direction) {
    var nav = document.querySelector('nav');
    if (direction === 'down') {
      nav.style.background = '#99FF66';
    }
  },
  offset: 'bottom-in-view'
=======
$(document).ready(function(){
$('top-navigation').waypoint(function(direction) {
  if (direction === 'down') {
    $('#nav-scroll').addClass('red');
  }
  else {
    $('#nav-scroll').removeClass('red');
  }
});
>>>>>>> 24b4bfc5c73197930cb20782c8639edceadc74f9
});
