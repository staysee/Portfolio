let isActive = false;

function activeMenu() {
    $('.menu-wrapper').click( () => {
        if (isActive) {
            $('.mobile-nav').removeClass('menu-active');
            isActive = false;
        } else {
            $('.mobile-nav').addClass('menu-active');
            isActive = true;
        }
        console.log(isActive);
    })
}

function closeMenu() {
    $('.mobile-nav a').click( () => {
        $('.mobile-nav').removeClass('menu-active');
        isActive = false;
        $('.nav').addClass('quick-nav');
    })
}


function runFunctions() {
    activeMenu();
    closeMenu();
}

$(runFunctions);