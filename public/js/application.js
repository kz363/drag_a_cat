$(document).ready(function() {

  var cat = $('#cat');
  var div = $('#container');
  div.css({
    'width': $(window).width(),
    'height': $(window).height()
  });
  var start_x = 0;
  var start_y = 0;

  div.on('mousedown', function(e) {
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
      var move_x = e.pageX,
      move_y = e.pageY,
      width  = Math.abs(move_x - start_x),
      height = Math.abs(move_y - start_y),
      new_x, new_y;

      new_x = (move_x < start_x) ? (start_x - width) : start_x;
      new_y = (move_y < start_y) ? (start_y - height) : start_y;

      $('#selection').css({
        'width': width,
        'height': height,
        'top': new_y,
        'left': new_x
      });
      
      div.on('mouseup', function(e) {
        $('#cat img').remove();
          small_x = start_x > new_x ? start_x : new_x;
          small_y = start_y > new_y ? start_y : new_y;

          cat.css({
            'width': width,
            'height': height,
            'top': new_y,
            'left': new_x
          });
          cat.append("<img src=http://placekitten.com/"+width+"/"+height+">");
          $('#selection').remove();
        });
    });
});
});