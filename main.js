function mobileNav() {
    if ($('.nav').css('display') === "block") {

        $('.nav-items a').click( () => {
            $('.nav').toggleClass('collapse')
            $('.nav').addClass('quick-nav')
            console.log('close')
        })

        $('.nav .toggle-collapse span').click( () => {
            $('.nav').toggleClass('collapse')
        })
    }
}

$(mobileNav)