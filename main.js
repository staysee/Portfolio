$(window).resize(function() {
    let width = $(window).width();
    if (width >= 768) {
        $('.nav').removeClass('collapse');
    }
})

function closeMenu() {
    $('.nav-items a').click( () => {
        $('.nav').removeClass('collapse');
        $('.nav').addClass('quick-nav');
    })
}

function toggleMenu() {
    $('.nav .toggle-collapse span').click( () => {
        $('.nav').toggleClass('collapse');
    })
}

function runFunctions() {
    $(closeMenu)
    $(toggleMenu)
}

$(runFunctions);