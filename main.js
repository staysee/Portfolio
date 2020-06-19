let isActive = false;

function menuColor() {
    $(window).scroll( () => {
        let about_pos = $('#About').offset().top;
        let menu_pos = $('#mobile-menu').offset().top;
        let menu_height = $('#mobile-menu').height();
        let scroll = $(window).scrollTop();

        if (menu_pos > about_pos){
            $('#mobile-menu').addClass('text-pewter');
            $('#mobile-menu').removeClass('text-bright');

        } else {
            $('#mobile-menu').addClass('text-bright');
            $('#mobile-menu').removeClass('text-pewter');

        }
    })
}

function activeMenu() {
    $('.menu-wrapper').click( () => {
        if (isActive) {
            $('.nav-items-wrapper').removeClass('menu-active');
            isActive = false;
        } else {
            $('.nav-items-wrapper').addClass('menu-active');
            isActive = true;
        }
    })
}

function closeMenu() {
    $('.nav-items-wrapper a').click( () => {
        $('.nav-items-wrapper').removeClass('menu-active');
        isActive = false;
        $('.nav').addClass('quick-nav');
    })
}

function runAll() {
    menuColor();
    activeMenu();
    closeMenu();
}

$(runAll);