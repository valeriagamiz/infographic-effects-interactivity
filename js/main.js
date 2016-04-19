var $dogchart = $('.dog-chart');

$dogchart.waypoint(function(direction) {
  if (direction== 'down'){
    $dogchart.addClass('dogperson-animate');
  } else {
  $dogchart.removeClass('dogperson-animate');
  }
}, {offset:'50%'});

$('.click').localScroll();
