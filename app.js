var menuLeft = document.getElementById( 'menu-s1' ),
		showLeftPush = document.getElementById( 'toggleMenu' ),
    wrap = document.querySelector( '.wrap' );
    //body = document.body;


showLeftPush.onclick = function() {
	this.classList.toggle( 'active' );
	wrap.classList.toggle( 'menu-push' );
	menuLeft.classList.toggle( 'menu-open' );
};
