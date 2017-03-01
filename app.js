var menu = $('#menu'),
		menuToggle = $('#menuToggle'),
    wrap = $('.wrap');

// Click Toggle
// (Function to replace deprecated .toggle jQuery method)
$.fn.clicktoggle = function(a, b) {
  return this.each(function() {
    var clicked = false;

    $(this).bind("click", function() {
      if (clicked) {
        clicked = false;
        return b.apply(this, arguments);
      }

      clicked = true;
      return a.apply(this, arguments);
    });
  });
};

// Toggle Menu
menuToggle.clicktoggle(function(){
	wrap.animate({left: '240px'}, 500);
	menu.animate({left: '0px'}, 500);
}, function(){
	wrap.animate({left: '0px'}, 500);
	menu.animate({left: '-240px'}, 500);
});

// Show/Hide Mobile Navigation on window resize
$(window).resize(function() {
  var width = $(window).width();
  if (width > 991) {
		wrap.css('left', '0px');
		menu.css('left', '0px');
	} else {
		menu.css('left', '-240px');
	}
});
