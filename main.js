$(window).resize(function() {
    let width = $(window).width()
    if (width < 600) {
        $(closeMenu)
        $(toggleMenu)
    }
})

function closeMenu() {
    $('.nav-items a').click( () => {
        $('.nav').removeClass('collapse')
        $('.nav').addClass('quick-nav')
        console.log('close')
    })
}

function toggleMenu() {
    $('.nav .toggle-collapse span').click( () => {
        $('.nav').toggleClass('collapse')
    })
}