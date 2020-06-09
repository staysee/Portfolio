$(window).resize(function() {
    console.log('resize')
    let width = $(window).width()
    if (width >= 768) {
        $('.nav').removeClass('collapse')
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
    console.log('toggleMenu called')
    $('.nav .toggle-collapse span').click( () => {
        $('.nav').toggleClass('collapse')
        console.log('toggle')
    })
}

$(closeMenu)
$(toggleMenu)