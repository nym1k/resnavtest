var menu = document.getElementById( 'menu-s1' ),
		toggleMenu = document.getElementById( 'toggleMenu' ),
    wrap = document.querySelector( '.wrap' );


toggleMenu.onclick = function() {
	this.classList.toggle( 'active' );
	wrap.classList.toggle( 'menu-push' );
	menu.classList.toggle( 'menu-open' );
};

window.addEventListener('resize', function(e) {
  var width = window.innerWidth;
  if (width > 991) {
		wrap.classList.remove('menu-push');
		menu.classList.remove('menu-open');
	}
});
