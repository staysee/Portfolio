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
        console.log(isActive);
    })
}

function closeMenu() {
    $('.nav-items-wrapper a').click( () => {
        $('.nav-items-wrapper').removeClass('menu-active');
        isActive = false;
        $('.nav').addClass('quick-nav');
    })
}


function runFunctions() {
    activeMenu();
    closeMenu();
}

$(runFunctions);