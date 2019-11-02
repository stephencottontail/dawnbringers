var toggle = document.getElementById( 'nav-toggle' );
var menu = document.getElementById( 'site-nav' );

toggle.addEventListener( 'click', function() {
    if ( menu.classList.contains( 'active' ) ) {
        menu.classList.remove( 'active' );
    } else {
        menu.classList.add( 'active' );
    }
} );
