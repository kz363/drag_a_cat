$(document).ready(function() {

  var cat = $('#cat');
  var div = $('#container');
  div.css({
    'width': $(window).width(),
    'height': $(window).height()
  });

  var start_x = 0;
  var start_y = 0;
  var new_x = 0;
  var new_y = 0;
  var ready = true;

  div.on('mousedown', function(e) {
    e.preventDefault();
    ready = false;
    div.append('<div id="selection"></div>');
    start_x = e.pageX;
    start_y = e.pageY;
    $('#selection').css({
      'top':    start_y,
      'left':   start_x,
      'width':  0,
      'height': 0
    });

    div.on('mousemove', function(e) {
      e.preventDefault();
      if(ready == false){
        var moving_x = e.pageX;
        var moving_y = e.pageY;
        var width  = Math.abs(moving_x - start_x);
        var height = Math.abs(moving_y - start_y);
        console.log(moving_x);
        console.log(moving_y);
        new_x = (moving_x < start_x) ? (start_x - width) : start_x;
        new_y = (moving_y < start_y) ? (start_y - height) : start_y;

        $('#selection').css({
          'width': width,
          'height': height,
          'top': new_y,
          'left': new_x
      });

        div.on('mouseup', function(e) {
          e.preventDefault();
          $('#cat img').remove();
          small_x = start_x < new_x ? start_x : new_x;
          small_y = start_y < new_y ? start_y : new_y;

          cat.css({
            'width': width,
            'height': height,
            'top': new_y,
            'left': new_x
          });
          cat.append("<img src=http://placekitten.com/"+width+"/"+height+">");
          ready = true;
          $('#selection').remove();
        });
      }});

});
});
