let isActive = false;

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
    activeMenu();
    closeMenu();
}

$(runAll);